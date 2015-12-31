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
import Login from './App/Login';
import Search from './App/Search';

import Article from './common/Article';

import Admin from './Admin';
import AdminHome from './Admin/AdminHome';
import AddArticle from './Admin/AddArticle';

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
        <Route path=":id" component={Article}/>
      </Route>
      <Route path="ingredients" component={Ingredients}>
        <Route path=":id" component={Article}/>
      </Route>
      <Route path="recipekit" component={RecipeKit} />
      <Route path="travel" component={Travel}>
        <Route path=":id" component={Article}/>
      </Route>
      <Route path="entertainment" component={Entertainment}>
        <Route path=":id" component={Article}/>
      </Route>
      <Route path="people" component={People}>
        <Route path=":id" component={Article}/>
      </Route>
      <Route path="login" component={Login}/>
    </Route>
  </Router>
);
