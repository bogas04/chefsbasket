import React from 'react';
import Banner from '../../common/Banner';
import CardList from '../../common/CardList';
import WouldYouCook from '../../common/WouldYouCook';

export default ({  }) => {
  return (
    <div>
      <Banner title={`Welcome to Chef's Basket`} image="/img/banner.jpg">
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><button className="btn btn-default" onClick={() => alert(`You've learnt now`)}>Learn More</button></p>
      </Banner>
      <WouldYouCook />
      <CardList title="Trending Topics" dataSource="/articles.json?trending=1" />
    </div>
  );
}
