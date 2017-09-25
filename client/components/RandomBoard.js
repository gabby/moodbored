import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../store';
import Paper from 'material-ui/Paper';
import { fetchSinglePin } from '../reducers';



class RandomBoard extends Component {
  constructor(props){
    super(props) 
    this.state = {
      randomArr: []
    }
  }

  componentWillMount(){
    let counter = 0; 
    while(counter < 6) {
      this.state.randomArr.push(Math.floor(Math.random()*this.props.userPins[0].length));
      counter++;
    }
  }


  render(props){
    let pins = this.props.userPins[0];
    let randomIdx = this.state.randomArr
    return (
      <div>
       {
        randomIdx.length && randomIdx.map(idx => {
          let pinId = pins[idx].id
          return <Paper 
            zDepth={1} 
            style={{overflow:'hidden', height:300, width:300, margin:20}}
            key={pinId}
            onClick={() => this.props.setSelectedPin(pinId)}>
              <NavLink 
                to={`/pins/${pinId}`}
                >
                <img 
                src={pins[idx].image.original.url} 
                style={{width:'100%', height:'auto'}}/>
              </NavLink>
          </Paper>
        }) 
       }
      </div>
    )
  }
};

const mapStateToProps = state =>{
  return {
    userPins: state.allPins
  }
}; 

const mapDispatchToProps = dispatch => ({
  setSelectedPin: pinId => {
    dispatch(fetchSinglePin(pinId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RandomBoard);