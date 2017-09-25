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
    store.dispatch(setSelectedPin(this.props.match.params.pinId));
  }

  
  render(){
   console.log('THIS IS A PIN')
   const pin = this.props.selectedPin; 
   if (pin.id){
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
   } else return (<div></div>)
  }
};

const mapStateToProps = state =>{
  return {
    selectedPin: state.selectedPin
  }
}; 

export default connect(mapStateToProps)(Pin);
 
