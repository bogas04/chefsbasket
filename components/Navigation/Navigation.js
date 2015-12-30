import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  componentDidMount () {
    window.onscroll = () => { 
      let $navbar = document.querySelector('#navbar-wrapper');
      window.scrollY > 300 ? $navbar.classList.add('shrink') : $navbar.classList.remove('shrink');
      //window.scrollY > 300 ? $($navbar).slideUp('fast') : $($navbar).slideDown('fast');
    };
  }
  render() {
    let expand = (e, w) => {
      e.style.width = window.matchMedia('(min-width: 992px)').matches ? w : '';
    };
    let upperHeader = (
      <div className="upper-header text-center">
        <div className="container-fluid">
          <div className="col-md-4" style={{paddingTop: '40px' }}>
            <Link to={`/login`} style={{color: '#252525'}}>LOGIN</Link>
          </div>
          <div className="col-md-4">
            <Link to={`/`}><img src="/img/logo_black.png" /></Link>
          </div>
          <div className="col-md-4" style={{paddingTop: '40px' }}>
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
          </div>
        </div>
      </div>
    );
    let navbar = (
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><Link to={`/recipes`}>Recipes</Link></li>
          <li><Link to={`/ingredients`}>Ingredients</Link></li>
          <li><Link to={`/recipekit`}>Recipe Kit</Link></li>
          <li><Link to={`/travel`}>Travel</Link></li>
          <li><Link to={`/entertainment`}>Entertainment</Link></li>
          <li><Link to={`/people`}>People</Link></li>
        </ul>
      </div>
    );
    return (
      <div id="navbar-wrapper">
        <nav className="navbar navbar-default navbar-fixed-top">

          {upperHeader}

          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to={`/`} className="navbar-brand"><img src="/img/logo_black.png" alt="Chef's Basket"/></Link>
            </div>

            {navbar}

          </div>
        </nav>

        <div className="header-clearer"></div>
      </div>
    );
  }
}
