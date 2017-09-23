import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

const Login = () => (
  <div>
    <div>
      <a href='/auth/pinterest'>
        <Paper zDepth={3} circle={true} style={{overflow:'hidden', height:400, width:400, margin:20, display: 'flex', flexDirection:'row', justifyContent:'center'}}>
          <img src="https://i.pinimg.com/originals/8f/82/c9/8f82c99bcd88ed685395a2b51174584b.jpg" style={{width:'100%', height:'auto'}}/>
        </Paper>
      </a>
    </div>
  </div>
);

export default Login;
 


  


