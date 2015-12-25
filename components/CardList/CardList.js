'use strict';

import React from 'react';

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      wrapper: {
        borderRadius: '7px',
        height: this.props.height || '413px',
        width: this.props.width || '385px',
        border: '1px solid grey',
        margin: '5px',
        overflow: 'auto',
        float: 'left',
      },
      title: {
        fontSize: '120%',
        color: 'grey',
        padding: '5px',
      },
      description: {
        padding: '5px',
        height: '90px',
      },
      callToActions: {
        textAlign: 'center',
      },
      callToAction: {
        borderRadius: 0,
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
    let callToActions = this.props.callToActions.map(e => (
      <button className={e.className} style={this.styles.callToAction} onClick={e.action} key={e.text}>
        <span className={"glyphicon glyphicon-"+e.glyphicon}></span> {e.text}
      </button>
    ));
    return (
      <div style={this.styles.wrapper}>
        <a href={this.props.url}>
          <div style={this.styles.imageWrapper} className="image-wrapper">
            <img style={{width: '100%'}} src={this.props.image} alt={this.props.title} />
          </div>
          <p style={this.styles.title}>{this.props.title}</p>
        </a>
        <p style={this.styles.description}>{this.props.children}</p>
        <div style={this.styles.callToActions}>
          {callToActions}
        </div>
      </div>
    )
  }
}

export default class CardList extends React.Component {
  constructor (p) {
    super(p);
    this.state = { cardData: [] };
  }
  componentDidMount() {
    $.getJSON(this.props.dataSource, e => {
      this.setState({
        cardData: e
      });
    });
  }
  render() {
    let callToActions = this.props.callToActions;
    let cards = this.state.cardData.map(e => (
      <Card
        image={e.image}
        url={e.url}
        title={e.title}
        callToActions={callToActions}
        key={e.title + Math.random()}>
        {e.content}
      </Card>
    ));

    return (<div className='container'>{cards}</div>);
  }
}
