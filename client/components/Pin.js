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
   const pin = this.props.selectedPin;
   console.log('THIS IS A PIN')
   console.log(pin);
   const imgUrl = pin.image.original.url;
    return (
      <Card>
        <CardMedia>
          <a href={pin.link} target="_blank">
            <img src={imgUrl} alt="" />
          </a>
        </CardMedia>
        <CardText>{pin.note}</CardText>
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
 
