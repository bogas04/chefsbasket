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
    this.state = { view: this.props.default || <h1 className="text-center"> Loading ... </h1>, data: {} };
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
          view: this.fillIn(this.props.data.category || 'travel', this.props.data)
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
        <Content>
          <h2> {data.title} </h2>
          { 
            layout === 'recipes' ? (
              <div>
                <div className="col-md-4">
                  <h1 style={{fontFamily: 'chardons', fontWeight: 100}}>Ingredients</h1>
                  <Markdown source={data.ingredients} />
                  <ArticleFooter article={data} />
                </div>
                <div className="col-md-8">
                  <h1 style={{fontFamily: 'chardons', fontWeight: 100}}>Preparation</h1>
                  <Markdown source={data.procedure} />
                </div>
              </div>
              ) : (
              <div>
                <Markdown source={data.body} />
                <ArticleFooter article={data} />
              </div>
              )
          }
        </Content>
        <CardList title="Related topics you might want to read" dataSource={`/articles.json?relatedTo=${this.state.data.slug}`} />
      </div>
    );
  }
  render() {
    return this.state.view;
  }
}
function ArticleFooter({ article }) {
  return (
    <div>
      <div className="row">
      </div>
      <h3> Tags </h3>
      {Array.isArray(article.tags) && article.tags.map(e => <Tag to={e} key={e} />)}
    </div>
  );

}
