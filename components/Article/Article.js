import React from 'react';
import ExEnv from 'fbjs/lib/ExecutionEnvironment';
import Banner from '../Banner';
import Related from '../Related';
import Hr from '../Hr';
import NotFound from '../NotFound';
import Content from '../Content';
import Tag from '../Tag';

export default class Article extends React.Component {
  constructor(p) {
    super(p);
    this.state = { data: null };
    if(ExEnv.canUseDOM) {
      $.getJSON(`/articles.json?id=${this.props.params.id}`, data => {
        this.setState({ data: this.fillIn(data.data.category, data.data)});
      }).fail(e => {
        this.setState({ data: <NotFound /> });
      });
    } else {
      // TODO: Test server rendering
      // this.setState({ data: { category: 'travel', body: 'yolo' }});
      //      fs.readFile(__dirname + '/server/data/')
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
                {data.tags.map(e => <Tag to={e} key={e} />)}
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
                {data.tags.map(e => <Tag to={e} key={e} />)}
              </div>
            </Content>
            )
        }
        <Related _for={this.props.params.id}/>
      </div>
    );
  }
  render() {
    return this.state.data || (<h1> Loading ... </h1>);
  }
}
