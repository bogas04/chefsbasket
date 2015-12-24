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
  render() {

    let callToActions = [
      { action: e => console.log('doing stuff about it', e), 
        text: 'Tweet It', glyphicon: 'retweet', className: 'btn btn-info'},
        { action: e => console.log('doing stuff about it', e), 
          text: 'Share on Facebook', glyphicon: 'share-alt', className: 'btn btn-primary'},
          { action: e => console.log('doing stuff about it', e),
            text: 'Pin It', glyphicon: 'pushpin', className: 'btn btn-danger'},
    ];

    let cards = [
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        title: "The biggest question we have after seeing 'Star Wars'",
        content: `Warning: If you haven't seen "Star Wars: The Force Awakens" there are spoilers ahead. We have a lot of questions after seeing "Star Wars: The ...`
      },
      {
        image: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        url: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        title: "Dilwale quick take: Shah Rukh Khan, Kajol are explosive together",
        content: 'Dilwale brings Shah Rukh Khan and Kajol together after six years. Varun Dhawan and Kriti Sanon make the other pair in the Rohit Shetty film. (Red Chillies)'
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        title: "The biggest question we have after seeing 'Star Wars'",
        content: `Warning: If you haven't seen "Star Wars: The Force Awakens" there are spoilers ahead. We have a lot of questions after seeing "Star Wars: The ...`
      },
      {
        image: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        url: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        title: "Dilwale quick take: Shah Rukh Khan, Kajol are explosive together",
        content: 'Dilwale brings Shah Rukh Khan and Kajol together after six years. Varun Dhawan and Kriti Sanon make the other pair in the Rohit Shetty film. (Red Chillies)'
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        title: "The biggest question we have after seeing 'Star Wars'",
        content: `Warning: If you haven't seen "Star Wars: The Force Awakens" there are spoilers ahead. We have a lot of questions after seeing "Star Wars: The ...`
      },
      {
        image: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        url: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        title: "Dilwale quick take: Shah Rukh Khan, Kajol are explosive together",
        content: 'Dilwale brings Shah Rukh Khan and Kajol together after six years. Varun Dhawan and Kriti Sanon make the other pair in the Rohit Shetty film. (Red Chillies)'
      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2000px-Star_Wars_Logo.svg.png",
        title: "The biggest question we have after seeing 'Star Wars'",
        content: `Warning: If you haven't seen "Star Wars: The Force Awakens" there are spoilers ahead. We have a lot of questions after seeing "Star Wars: The ...`
      },
      {
        image: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        url: "http://www.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/18/Pictures/_3ef19232-a547-11e5-a915-4cd4d91edd66.jpg",
        title: "Dilwale quick take: Shah Rukh Khan, Kajol are explosive together",
        content: 'Dilwale brings Shah Rukh Khan and Kajol together after six years. Varun Dhawan and Kriti Sanon make the other pair in the Rohit Shetty film. (Red Chillies)'
      },
    ].map(e => <Card image={e.image} url={e.url} title={e.title} callToActions={callToActions} key={e.title + Math.random()}>{e.content}</Card>);

    return (<div className='container'>{cards}</div>);
  }
}
