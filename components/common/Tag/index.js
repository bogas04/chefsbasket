import React from 'react';
import { Link } from 'react-router';

export default ({ to }) => {
  return (
    <Link to={`/search?tag=${to}`} className='tag'>#{to}</Link>
  );
}
