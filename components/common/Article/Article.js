import React from 'react';
import ExEnv from 'fbjs/lib/ExecutionEnvironment';
import Banner from '../Banner';
import Related from '../Related';
import Hr from '../Hr';
import Content from '../Content';
import Tag from '../Tag';

import NotFound from '../../NotFound';

export default class Article extends React.Component {
  constructor(p) {
    super(p);
    this.state = { data: this.props.default || <h1> Loading ... </h1> };
    if(!this.props.loadStatic && ExEnv.canUseDOM) { // dynamic loading/client loading
      $.getJSON(`/articles.json?id=${this.props.params.id}`, data => {
        this.setState({ data: this.fillIn(data.data.category, data.data)});
      }).fail(e => {
        this.setState({ data: <NotFound /> });
      });
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
        <Banner title={data.header.title} image={data.header.image} >
          <p>{data.header.summary}</p>
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
                <h2>Ingredients</h2>
                <div dangerouslySetInnerHTML = {{__html: data.ingredients}} />
                <h3> Tags </h3>
                {Array.isArray(data.tags) && data.tags.map(e => <Tag to={e} key={e} />)}
              </div>
              <div className="col-md-8">
                <h2>Preparation</h2>
                <div dangerouslySetInnerHTML = {{__html: data.procedure}} />
              </div>
            </Content>
            ) : (
            <Content>
              <h2> {data.title} </h2>
              <div dangerouslySetInnerHTML = {{__html: data.body}} />
              <div>
                <h3> Tags </h3>
                {Array.isArray(data.tags) && data.tags.map(e => <Tag to={e} key={e} />)}
              </div>
            </Content>
            )
        }
        <Related _for={this.props.params ? this.props.params.id : null}/>
      </div>
    );
  }
  render() {
    return this.state.data;
  }
}
