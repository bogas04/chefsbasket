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
import Article from './Article';
import Login from './Login';
import Search from './Search';

module.exports = [
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="search" component={Search}/>
    <Route path="recipes" component={Recipes} >
      <Route path=":id" component={Article}/>
    </Route>
    <Route path="ingredients" component={Ingredients}>
      <Route path=":id" component={Article}/>
    </Route>
    <Route path="community" component={Community} />
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
];
