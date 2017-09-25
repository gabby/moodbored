import React, {Component} from 'react';
// import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import store from '../store';
import Center from 'react-center';


const Login = () => (
  <Center>
    <div>
      <Paper zDepth={3} circle={true} style={{overflow:'hidden', height:400, width:400, display: 'flex', flexDirection:'row', justifyContent:'center'}}>
        <a href='/auth/pinterest'>
          <img src="https://i.pinimg.com/originals/8f/82/c9/8f82c99bcd88ed685395a2b51174584b.jpg" style={{width:'100%', height:'auto'}}/>
        </a>
      </Paper>
    </div>
  </Center>
);

export default Login;
 


  


