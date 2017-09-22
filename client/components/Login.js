import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export default class Login extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <a
          className="btn btn-block btn-social btn-pinterest"
          href='/auth/pinterest'>
          <button className="fa fa-pinterest"></button> Sign in with Pinterest
        </a>
      </div>
    )
  }
};


  


