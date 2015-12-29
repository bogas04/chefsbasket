import React from 'react';
import { Link } from 'react-router';

export default class Tag extends React.Component {
  render() {
    return (
      <Link to={`/search?tag=${this.props.to}`} className='tag'>#{this.props.to}</Link>
    );
  }
}

