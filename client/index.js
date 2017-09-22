import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login.js';
import './index.scss';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Login}></Route>
        </Switch>
      </div>
    </Router>
  </div>,
  document.getElementById('app')
);