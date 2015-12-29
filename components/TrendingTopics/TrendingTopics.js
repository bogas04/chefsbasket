import React from 'react';
import { Link } from 'react-router';
import ImageWrapper from '../ImageWrapper';

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

export default class TrendingTopics extends React.Component {
  constructor(p) {
    super(p);
    this.state = { topics: [] };
  }
  componentDidMount() {
    $.getJSON('/articles.json?trending=1', data => {
      this.setState({ topics: data.data.slice(0, 2) });
    });
  }
  render() {
    return (
      <div className="container">
        <h1 style={{fontFamily: 'chardons', fontWeight: '100', textAlign: 'center', marginBottom: '20px'}}>Trending Topics</h1>
        {
          this.state.topics.map(t => (
            <div className="col-md-6">
              <Topic 
                key={t.slug}
                image={t.header.image}
                author={t.author.name}
                url={`/${t.category}/${t.slug}`}
                likes={t.likes}
                date={t.timestamp}
                >
                {t.title}
              </Topic>
            </div>
            ))
        }
      </div>
    );
  }
}
