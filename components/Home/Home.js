import React from 'react';
import Banner from '../Banner';
import CardList from '../CardList';
import WouldYouCook from '../WouldYouCook';
import TrendingTopics from '../TrendingTopics';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner title={`Welcome to Chef's Basket`} >
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><button className="btn btn-default" onClick={() => alert(`You've learnt now`)}>Learn More</button></p>
        </Banner>
        <WouldYouCook />
        <div className="container"><hr style={{color: '#B4B4B4'}}/></div>
        <TrendingTopics />
      </div>
    );
  }
}
