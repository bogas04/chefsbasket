import React from 'react';
import ImageWrapper from '../ImageWrapper';

class Topic extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.url}>
          <ImageWrapper src={this.props.image} alt={this.props.children} />
          <h2 style={{fontWeight: '100', textAlign: 'center'}}>{this.props.children}</h2>
        </a>
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
  render() {
    return (
      <div className="container">
        <h1 style={{fontFamily: 'chardons', fontWeight: '100', textAlign: 'center', marginBottom: '20px'}}>Trending Topics</h1>
        <div className="col-md-6">
          <Topic image="/img/pizza.jpg" author="John Doe" url="#" likes="52" date="2 weeks ago">Are These The Best Pizzas Ever?</Topic>
        </div>
        <div className="col-md-6">
          <Topic image="/img/waffle.jpg" author="Jane Doe" url="#" likes="12" date="4 days ago">The Ultimate Christmas Dessert Showdown</Topic>
        </div>
      </div>
    );
  }
}
