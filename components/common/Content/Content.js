import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <div className="content container">
        {this.props.children}
      </div>
    );
  }
}
