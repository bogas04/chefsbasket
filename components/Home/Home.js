import React from 'react';
import Banner from '../Banner';
import CardList from '../CardList';
import WouldYouCook from '../WouldYouCook';
import TrendingTopics from '../TrendingTopics';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <WouldYouCook />
        <div className="container"><hr style={{color: '#B4B4B4'}}/></div>
        <TrendingTopics />
      </div>
    );
  }
}
