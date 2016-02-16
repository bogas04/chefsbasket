'use strict';

import React from 'react';
import ImageWrapper from '../ImageWrapper';
import ExEnv from 'fbjs/lib/ExecutionEnvironment';
import TimeAgo from 'react-timeago';

export default class CardList extends React.Component {
  constructor (p) {
    super(p);
    this.state = { cardData: null };
    if(ExEnv.canUseDOM) {
      fetch(this.props.dataSource)
      .then(d => d.json())
      .then(e => this.setState({
        cardData: e.data
      }));
    }
  }
  render() {
    let cards;
    if(this.state.cardData) {
      if(this.state.cardData.length > 0) {
        cards = this.state.cardData.map(e => (
          <Card
            image={e.header_image_url}
            url={`/${e.category}/${e.slug}`}
            title={e.title}
            key={e.title}>
            <div className="col-md-4 text-left">
              <span className="glyphicon glyphicon-time" style={{ color: 'green' }}></span> <TimeAgo date={e.created_at} formatter={(value, unit, suffix) => {
                let units = { 'second': 's', 'minute': 'm', 'hour': 'h', 'day': 'd', 'week': 'w', 'month': 'mo', 'year': 'y' };
                return value + units[unit];}}/>
            </div>
            <div className="col-md-4 text-center">{e.author_name}</div>
            <div className="col-md-4 text-right">
              <span className="glyphicon glyphicon-heart" style={{ color: 'red' }}></span> {e.likes || 0}
            </div>
          </Card>
        )) ;
      } else {
        cards = (
          <div>
            <h2> No posts to show :( </h2>
          </div>);
      }
    }
    return (
      <div className='container'>
        <h1 style={{fontFamily: 'chardons', fontWeight: 100, textAlign: 'center', marginBottom: '20px'}}>{this.props.title}</h1>
        {cards}
      </div>);
  }
}
export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      wrapper: {
        border: '1px solid grey',
        backgroundColor: '#fff',
        height: this.props.height || '364px',
        width: this.props.width || '385px',
        margin: '5px',
        overflow: 'auto',
        float: 'left',
      },
      title: {
        fontWeight: 100,
        textAlign: 'center',
      },
      description: {
        padding: '5px',
      },
    };
  }
  render() {
    return (
      <div style={this.styles.wrapper}>
        <a href={this.props.url}>
          <ImageWrapper height="250px" src={this.props.image} alt={this.props.title} />
          <h2 style={this.styles.title}>{this.props.title}</h2>
        </a>
        <p style={this.styles.description}>{this.props.children}</p>
      </div>
    )
  }
}
