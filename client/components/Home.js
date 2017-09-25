import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';
import { fetchUser } from '../reducers';
import FlatButton from 'material-ui/FlatButton';
import Center from 'react-center';



class Home extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(props){
    this.props.initializeState();
    document.body.className="change-mood"
  }
  componentWillUnmount(props){
    document.body.className=null;
  }

  render(){
    return (
      <Center>
        <div>
          <Link to="/random-bored">
            <img
            style={{height:275}} src="http://www.clker.com/cliparts/7/A/Z/y/2/V/chrystal-ball.svg"/>
            <Center>
              <div className="col-centered"><FlatButton label="Change My Mood"/></div>
            </Center>
          </Link>
        </div>
      </Center>
    )
  }
};
  
const mapStateToProps = state =>{
  return {
    currentUser: state.currentUser
  }
}; 

const mapDispatchToProps = dispatch => ({
  initializeState: () => {
    dispatch(fetchUser());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
