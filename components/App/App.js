import React from 'react';
import Navigation from '../common/Navigation';
import Subscribe from '../common/Subscribe';
import Footer from '../common/Footer';
import auth from '../auth';
import ExEnv from 'fbjs/lib/ExecutionEnvironment';

export default class App extends React.Component {
  constructor(p) {
    super(p);
    // TODO: See if server can help in checking if user is logged in
    this.state = { loggedIn: ExEnv.canUseDOM ? auth.loggedIn() : false };
  }
  updateAuth(loggedIn) {
    this.setState({ loggedIn });
  }
  componentWillMount() {
    // TODO: Figure out a way to let auth tell App
    if(ExEnv.canUseDOM) {
      auth.onChange = (p) => this.updateAuth(p);
    }
  }
  render() {
    return (
      <div>
        <Navigation
          loggedIn={this.state.loggedIn}
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
