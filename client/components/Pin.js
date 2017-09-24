import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../store';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Pin extends Component {
  constructor(props){
    super(props)
  }
  
  render(){
    // const imgUrl =this.props.selectedPin.image.original.url;
    // const pin = this.props.selectedPin;
    return (
      <Card>
        <CardText>HELLOOO</CardText>
      { 
      //   <CardMedia>
      //   <a href={pin.link} target="_blank">
      //     <img src={imgUrl} alt="" />
      //   </a>
      // </CardMedia>
      // <CardText>{pin.note}</CardText>
    }
      </Card>

    )
  }
};

const mapStateToProps = state =>{
  return {
    selectedPin: state.selectedPin
  }
}; 

export default connect(mapStateToProps)(Pin);
 
