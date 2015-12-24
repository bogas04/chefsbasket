import React from 'react';
import Navigation from '../Navigation';
import Subscribe from '../Subscribe';
import Footer from '../Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
