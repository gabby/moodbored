import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../reducers';
import { connect } from 'react-redux';
import store from '../store';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Center from 'react-center';

export const Navbar = (props) => {
  return (
    <nav className="navbar">
        <div>
          <div>
            <span style={{margin:0, display:'inline-block' }} className="logo" >
                MoodBored
            </span>
            {
              props.currentUser.id ? 
                <Link to="/" className="pull-right" style={{margin:0, display:'inline-block' }}>
                  <FlatButton 
                  type="button" className="btn btn-default btn-sm"
                  onClick={props.handleLogout}>
                  LOGOUT
                  </FlatButton>
                </Link> : null
            }
          </div>  
        </div>
    </nav>
  )
}

const mapStateToProps = state =>{
  return {
    currentUser: state.currentUser
  }
}; 

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogout: () => {
    dispatch(logout(ownProps.history));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


