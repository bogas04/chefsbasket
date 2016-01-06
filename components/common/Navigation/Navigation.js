import React from 'react';
import { Link } from 'react-router';
import throttle from 'lodash.throttle';

export default class Navigation extends React.Component {
  componentDidMount () {
    window.onscroll = throttle(() => { 
      let $navbar = document.getElementsByClassName('navbar-wrapper')[0];
      window.scrollY > 300 ? $navbar.classList.add('shrink') : $navbar.classList.remove('shrink');
    }, 200);
  }
  render() {
    return (
      <div className={"navbar-wrapper"}>
        <nav className="navbar navbar-default navbar-fixed-top">

          <UpperHeader {...this.props}/>

          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to={`/`} className="navbar-brand"><img src="/img/logo_black.png" alt="Chef's Basket"/></Link>
            </div>

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                {this.props.routes.map(e => <li key={e.url} style={{width: `${100/this.props.routes.length}%`}}><Link to={e.url}>{e.title}</Link></li>)}
              </ul>
            </div>

          </div>
        </nav>
        <div className="header-clearer"></div>
      </div>
    );
  }
}

function UpperHeader ({ loggedIn, hideSearch }) {
  let search;
  let expand = (e, w) => {
    e.style.width = window.matchMedia('(min-width: 992px)').matches ? w : '';
  };
  if(!hideSearch) {
    search = (
      <form action="/search">
        <div className="input-group">
          <input
            style={{backgroundColor: '#FAFAFA'}}
            onFocus={e => expand(e.currentTarget.parentNode.parentNode, '400px')}
            onBlur={e => expand(e.currentTarget.parentNode.parentNode, '')}
            type="text" className="form-control black-placeholder" placeholder="SEARCH" name="q" />
          <span className="input-group-btn">
            <button className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
          </span>
        </div>
      </form>
    );
  }
  return (
    <div className="upper-header text-center">
      <div className="container-fluid">
        <div className="col-md-4" style={{paddingTop: '40px' }}>
          <Link to={loggedIn ? `/account` : `/login`} style={{color: '#252525', textTransform: 'uppercase'}}> {loggedIn ? `account` : `login`}</Link>
        </div>
        <div className="col-md-4">
          <Link to={`/`}><img src="/img/logo_black.png" /></Link>
        </div>
        <div className="col-md-4" style={{paddingTop: '40px' }}>
          {search}
        </div>
      </div>
    </div>
  );
}
