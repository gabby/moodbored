import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';


class RandomBoard extends Component {
  constructor(props){
    super(props)
    let counter = 6;
    const randomArr = [];
  }

  componentWillMount(){
    while(counter > 0){
      this.randomArr.push(Math.floor(Math.random()*this.props.userPins.length));
    };
  }
  render(){
    console.log(this.randomArr);
    let pins = this.props.userPins;
    const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <div>
        {
          this.randomArr.length && this.randomArr.map(randomIdx => {
            <Paper 
            zDepth={1} 
            style={{overflow:'hidden', height:300, width:300, margin:20}}>
            <img src={pins[randomIdx].image.original.url} style={{width:'100%', height:'auto'}}/>
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


export default connect(mapStateToProps)(RandomBoard);