import React from 'react';
import Navigation from '../common/Navigation';

export default class Admin extends React.Component {
  constructor(p) {
    super(p);
  }
  render() {
    return (
      <div>
        <Navigation
          loggedIn={true}
          hideSearch={true}
          routes={[
            {url:`/admin/main-pages`, title: `Main Pages`},
            {url:`/admin/page`, title: `Articles`},
            {url:`/admin/home-page`, title: `Home Page`},
          ]}
        />
        { this.props.children }
      </div>
    );
  }
}