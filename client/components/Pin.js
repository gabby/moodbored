import React, {Component} from 'react';
import { connect } from 'react-redux';
import store from '../store';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { setSelectedPin } from '../reducers';


class Pin extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('MOUNTING')
    store.dispatch(setSelectedPin(this.props.match.params.pinId));
  }

  
  render(){
   const pin = this.props.selectedPin;
   console.log('THIS IS A PIN')
   //const imgUrl = pin.image.original.url;
   if (pin.id){
     return (
       <Card>
         {
        //    <CardMedia>
        //    <a href={pin.link} target="_blank">
        //      <img src={imgUrl} alt="" />
        //    </a>
        //  </CardMedia>
        //  <CardText>{pin.note}</CardText>
         }
       </Card>
     )
   }  else return (<div></div>)
  }
};

const mapStateToProps = state =>{
  return {
    selectedPin: state.selectedPin
  }
}; 

export default connect(mapStateToProps)(Pin);
 
