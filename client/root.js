import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import store from './store';
import { fetchUser } from './reducers';


class Root extends React.Component {
  constructor(props){
    super(props)
  } 

  componentDidMount(props){
    this.props.setCurrentUser();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/home' component={Home}></Route>
        </Switch>
      </div>
   )
  }
} 

const mapStateToProps = state =>{
  return {
    currentUser: state.currentUser
  }
}; 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => {
    dispatch(fetchUser());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);
