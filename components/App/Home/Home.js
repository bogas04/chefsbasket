import React from 'react';
import Hr from '../../common/Hr';
import Banner from '../../common/Banner';
import CardList from '../../common/CardList';
import WouldYouCook from '../../common/WouldYouCook';
import TrendingTopics from '../../common/TrendingTopics';

export default class Home extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        <Banner title={`Welcome to Chef's Basket`} image="/img/banner.jpg">
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><button className="btn btn-default" onClick={() => alert(`You've learnt now`)}>Learn More</button></p>
        </Banner>
        <WouldYouCook />
        <Hr />
        <TrendingTopics />
      </div>
    );
  }
}
