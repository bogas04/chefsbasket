import React from 'react';
import Navigation from '../Navigation';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import RCTG from 'react-addons-css-transition-group';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <RCTG
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </RCTG>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}
