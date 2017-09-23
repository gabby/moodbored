import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../reducers';
import store from '../store'


export const Navbar = (props) => {
  return (
    <nav className="navbar">
        <div>
          {
            props.currentUser.id ? 
          <Link to="/" className="pull-right">
            <button 
            type="button" className="btn btn-default btn-sm"
            onClick={props.handleLogout}>
              Logout
            </button>
          </Link> : null
          }
        </div>
    </nav>
  )
}

const mapStateToProps = state =>{
  return {
    currentUser: state.currentUser
  }
}; 

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(logout());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


