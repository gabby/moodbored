import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export default class Login extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <button>
          <a
            className="btn btn-block btn-social btn-pinterest"
            href='/auth/pinterest'>
            <span className="fa fa-pinterest"></span> Sign in with Pinterest
          </a>
      </button>
    )
  }
};


  


