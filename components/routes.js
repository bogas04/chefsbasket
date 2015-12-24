import React from 'react';
import { IndexRoute, Route, Router } from 'react-router';

import App from './App';
import Home from './Home';
import Entertainment from './Entertainment';
import People from './People';
import Travel from './Travel';
import Community from './Community';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import Recipe from './Recipe';
import Login from './Login';
import Search from './Search';

module.exports = [
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="search" component={Search}/>
    <Route path="recipes" component={Recipes} >
      <Route path=":recipeId" component={Recipe}/>
    </Route>
    <Route path="ingredients" component={Ingredients}/>
    <Route path="community" component={Community}/>
    <Route path="travel" component={Travel}/>
    <Route path="entertainment" component={Entertainment}/>
    <Route path="people" component={People}/>
    <Route path="login" component={Login}/>
  </Route>
];
