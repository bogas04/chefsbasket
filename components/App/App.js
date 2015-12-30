import React from 'react';
import Navigation from '../Navigation';
import Subscribe from '../Subscribe';
import Footer from '../Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation
          loggedIn={false}
          hideSearch={false}
          routes={[
            {url:`/recipes`, title: `Recipes`},
            {url:`/ingredients`, title: `Ingredients`},
            {url:`/recipekit`, title: `Recipe Kit`},
            {url:`/travel`, title: `Travel`},
            {url:`/entertainment`, title: `Entertainment`},
            {url:`/people`, title: `People`},
          ]}
        />
        {this.props.children}
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
