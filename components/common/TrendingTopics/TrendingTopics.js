import React from 'react';
import { Link } from 'react-router';
import ImageWrapper from '../ImageWrapper';
import ExEnv from 'fbjs/lib/ExecutionEnvironment';

export default class TrendingTopics extends React.Component {
  constructor(p) {
    super(p);
    this.state = { topics: [] };
    if(ExEnv.canUseDOM) {
      fetch('/articles.json?trending=1')
      .then(data => data.json())
      .then(data => this.setState({ topics: data.data.slice(0, 2) }));
    } else {
      // server side rendering
      // Option 1: Consume the REST API Synchronously.
      // Option 2: Use the function that API route uses. (much better approach)
    }
  }
  render() {
    return (
      <div className="container">
        <h1 style={{fontFamily: 'chardons', fontWeight: '100', textAlign: 'center', marginBottom: '20px'}}>Trending Topics</h1>
        {
          this.state.topics.length > 0 ?  this.state.topics.map(t => (
            <div className="col-md-6" key={t.slug}>
              <Topic 
                image={t.header_image_url}
                author={t.author_name}
                url={`/${t.category}/${t.slug}`}
                likes={t.likes}
                date={t.created_at}
                >
                {t.title}
              </Topic>
            </div>
            )) : (
            <h4 className="text-center"> Nothing to show </h4>
            )
        } 
      </div>
    );
  }
}

class Topic extends React.Component {
  render() {
    return (
      <div>
        <Link to={this.props.url} style={{textDecoration: 'none'}}>
          <ImageWrapper src={this.props.image} alt={this.props.children} />
          <h2 style={{fontWeight: '100', textAlign: 'center'}}>{this.props.children}</h2>
        </Link>
        <div>
          <div className="col-xs-3 text-left">
            <span style={{color: 'green'}} className="glyphicon glyphicon-time"></span> {this.props.date}
          </div>
          <div className="col-xs-6 text-center">
            <span style={{fontWeight: '100', textAlign: 'center', fontSize: '120%'}}>{this.props.author}</span>
          </div>
          <div className="col-xs-3 text-right">
            <span style={{color: 'red'}} className="glyphicon glyphicon-heart"></span> {this.props.likes}
          </div>
        </div>
      </div>
    );
  }
}
