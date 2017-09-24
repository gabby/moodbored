import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';
import { fetchUser } from '../reducers';

class Home extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(props){
    this.props.setCurrentUser();
  }

  render(){
    return (
      <div>
        <button>Change My Mood</button>
      </div>
    )
  }
};
  
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
