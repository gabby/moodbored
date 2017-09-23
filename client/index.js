import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login}></Route>
        </Switch>
      </div>
   )
  }
}