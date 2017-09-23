import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


export default () => {
  return (
    <nav className="navbar">
        <div>
          <Link to="/logout" className="pull-right">
            <button type="button" className="btn btn-default btn-sm">
              Logout
            </button>
          </Link>
        </div>
    </nav>
  )
}



