import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import CallCharges from './components/CallCharges';
import NotFound from './components/NotFound';

/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App} />
    <Route path="/itemised-bill" component={CallCharges} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.getElementById('statement'));
