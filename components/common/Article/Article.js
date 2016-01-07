import React from 'react';
import Markdown from 'react-remarkable';
import ExEnv from 'fbjs/lib/ExecutionEnvironment';
import Banner from '../Banner';
import CardList from '../CardList';
import Content from '../Content';
import Tag from '../Tag';

import NotFound from '../../NotFound';

export default class Article extends React.Component {
  constructor(p) {
    super(p);
    this.state = { data: this.props.default || <h1 className="text-center"> Loading ... </h1> };
    if(!this.props.loadStatic && ExEnv.canUseDOM) { // dynamic loading/client loading
      fetch(`/articles.json/${this.props.params.slug}`)
      .then(data => data.json())
      .then(data => this.setState({ data: this.fillIn(data.data.category, data.data)}))
      .catch(e => this.setState({ data: <NotFound /> }));
    }
  }
  componentWillReceiveProps() {
    if(this.props.loadStatic) { // static loading/server loading
      if(this.props.data) {
        this.setState({
          data: this.fillIn(this.props.data.category || 'travel', this.props.data)
        });
      }
    }
  }
  fillIn(layout, data) {
    return (
      <div>
        <Banner title={data.header_title} image={data.header_image_url} >
          <p>{data.author_name}</p>
          {
            layout === 'recipes' && (
              <div>
                <h3 style={{fontWeight: 100}}> Difficulty: {data.difficulty} </h3>
                <h4 style={{fontWeight: 100}}> Serves: {data.serves} </h4>
              </div>
              )
          }
        </Banner>
        { 
          layout === 'recipes' ? (
            <Content>
              <h2> {data.title} </h2>
              <div className="col-md-4">
                <h1 style={{fontFamily: 'chardons', fontWeight: 100}}>Ingredients</h1>
                <Markdown source={data.ingredients} />
                <h3> Tags </h3>
                {Array.isArray(data.tags) && data.tags.map(e => <Tag to={e} key={e} />)}
              </div>
              <div className="col-md-8">
                <h1 style={{fontFamily: 'chardons', fontWeight: 100}}>Preparation</h1>
                <Markdown source={data.procedure} />
              </div>
            </Content>
            ) : (
            <Content>
              <h2> {data.title} </h2>
              <Markdown source={data.body} />
              <div>
                <h3> Tags </h3>
                {Array.isArray(data.tags) && data.tags.map(e => <Tag to={e} key={e} />)}
              </div>
            </Content>
            )
        }
        <CardList title="Related topics you might want to read" dataSource={`/articles.json?relatedTo=${this.props.params.slug}`} />
      </div>
    );
  }
  render() {
    return this.state.data;
  }
}
