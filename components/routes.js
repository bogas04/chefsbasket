import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';

import App from './App';

import Home from './App/Home';
import Entertainment from './App/Entertainment';
import People from './App/People';
import Travel from './App/Travel';
import RecipeKit from './App/RecipeKit';
import Ingredients from './App/Ingredients';
import Recipes from './App/Recipes';

import Account from './Account';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Search from './Search';

import Article from './common/Article';
import NotFound from './NotFound';

import Admin from './Admin';
import AdminHome from './Admin/AdminHome';
import AddArticle from './Admin/AddArticle';

import auth from './auth';

function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}
module.exports = (
  <Router>
    <Route path="admin" component={Admin}>
      <IndexRoute component={AdminHome} />
      <Route path="article/add" component={AddArticle} />
    </Route>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="search" component={Search}/>
      <Route path="recipes" component={Recipes} >
        <Route path=":slug" component={Article}/>
      </Route>
      <Route path="ingredients" component={Ingredients}>
        <Route path=":slug" component={Article}/>
      </Route>
      <Route path="recipekit" component={RecipeKit} />
      <Route path="travel" component={Travel}>
        <Route path=":slug" component={Article}/>
      </Route>
      <Route path="entertainment" component={Entertainment}>
        <Route path=":slug" component={Article}/>
      </Route>
      <Route path="people" component={People}>
        <Route path=":slug" component={Article}/>
      </Route>
      <Route path="login" component={Login}/>
      <Route path="logout" component={Logout}/>
      <Route path="account" component={Account} onEnter={requireAuth}/>
      <Route path="signup" component={Signup}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
