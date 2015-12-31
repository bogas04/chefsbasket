import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="container-fluid footer">
        <div style={{marginBottom: '20px'}}>
          <img src="/img/logo_white_hor.png" alt="Chef's Basket Logo" />
        </div>
        <div className="col-md-4">
          <div> &copy; {new Date().getFullYear()} Chef's Basket </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="http://chefsbasket.com/vangelist/">Careers</a></li>
          </ul>
        </div>
        <div className="col-md-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="col-md-4">
          <h5 style={{color: '#fafafa', textAlign: 'center'}}> Visit us on: </h5>
          <ul className="list-inline text-center">
            <li><a target="_blank" href="https://www.facebook.com/chefsbasket/">Facebook</a></li>
            <li><a target="_blank" href="https://twitter.com/ChefsBasket">Twitter</a></li>
            <li><a target="_blank" href="https://www.instagram.com/chefsbasket/">Instagram</a></li>
            <li><a target="_blank" href="https://www.youtube.com/user/ChefsBasketRecipes">YouTube</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}
