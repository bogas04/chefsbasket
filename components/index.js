import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import {
  Router,
  Route,
  IndexRoute,
} from 'react-router';
import routes from './routes';

render(<Router routes={routes} history={createBrowserHistory()}/>, document.getElementById('app'));
