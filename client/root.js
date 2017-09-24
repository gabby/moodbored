import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RandomBoard from './components/RandomBoard';
import Pin from './components/Pin';
import store from './store';


export default class Root extends React.Component {
  constructor(props){
    super(props)
  } 

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/random-bored' component={RandomBoard}></Route>
          <Route path='/pins/:pinId' component={Pin}></Route>
        </Switch>
      </div>
   )
  }
} 


