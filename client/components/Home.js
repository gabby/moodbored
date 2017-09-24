import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';


export default class Home extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <button>Change My Mood</button>
      </div>
    )
  }
};
  
