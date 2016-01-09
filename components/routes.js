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

import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';
import Search from './Search';

import Article from './common/Article';
import NotFound from './NotFound';

import Account from './Account';
import AccountHome from './Account/AccountHome';
import Collections from './Account/Collections';
import AddArticle from './Account/AddArticle';
import EditArticle from './Account/EditArticle';
import DeleteArticle from './Account/DeleteArticle';
import AddUser from './Account/AddUser';
import EditUser from './Account/EditUser';
import DeleteUser from './Account/DeleteUser';

import auth from './auth';

function requireNotNormal(nextState, replaceState) {
  if (!auth.loggedIn() || JSON.parse(localStorage.user).type === 'normal')
    replaceState({ nextPathname: nextState.location.pathname }, '/account');
}
function notRequireAuth(nextState, replaceState) {
  if (auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/account');
}
function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
}
module.exports = (
  <Router>
    <Route path="account" component={Account} onEnter={requireAuth}>
      <IndexRoute component={AccountHome} />
      <Route path="collections" component={Collections} />
      <Route path="article/add" component={AddArticle} onEnter={requireNotNormal}/>
      <Route path="article/:slug/edit" component={EditArticle} onEnter={requireNotNormal}/>
      <Route path="article/:slug/delete" component={DeleteArticle} onEnter={requireNotNormal}/>
      <Route path="user/add" component={AddUser} onEnter={requireNotNormal}/>
      <Route path="user/:username/edit" component={EditUser} onEnter={requireNotNormal}/>
      <Route path="user/:username/delete" component={DeleteUser} onEnter={requireNotNormal}/>
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
      <Route path="login" component={Login} onEnter={notRequireAuth}/>
      <Route path="logout" component={Logout} onEnter={requireAuth}/>
      <Route path="signup" component={Signup}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);
