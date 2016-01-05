'use strict';

import React from 'react';
import TrendingTopics from '../TrendingTopics';
import ExEnv from 'fbjs/lib/ExecutionEnvironment';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      wrapper: {
        height: this.props.height || '413px',
        width: this.props.width || '385px',
        margin: '5px',
        overflow: 'auto',
        float: 'left',
      },
      title: {
        fontSize: '120%',
        color: 'grey',
        padding: '5px',
        textAlign: 'center',
      },
      description: {
        padding: '5px',
        height: '90px',
      },
      imageWrapper: {
        height: '200px',
        backgroundColor: 'grey',
        textAlign: 'center',
        overflow: 'hidden',
        boxShadow: '0 0 10px 5px black inset',
      },
    };
  }
  render() {
    return (
      <div style={this.styles.wrapper}>
        <a href={this.props.url}>
          <div style={this.styles.imageWrapper} className="image-wrapper">
            <img style={{width: '100%'}} src={this.props.image} alt={this.props.title} />
          </div>
          <p style={this.styles.title}>{this.props.title}</p>
        </a>
        <p style={this.styles.description}>{this.props.children}</p>
      </div>
    )
  }
}

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
            key={e.title + Math.random()}>
            {e.header_summary}
          </Card>
        )) ;
      } else {
        cards = (
          <div>
            <h2> No posts to show :( Browse through trending topics </h2>
            <TrendingTopics />
          </div>);
      }
    }
    return (<div className='container'>{cards}</div>);
  }
}
