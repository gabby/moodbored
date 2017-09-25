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
   const user = this.props.userInfo;
   if (pin.id){
    const imgUrl = pin.image.original.url;    
    return (
      <Card>
        <CardHeader
        title={`${user.first_name} ${user.last_name}`}
        subtitle={user.username}
        avatar={user.image}
         />
        <CardMedia>
          <a href={pin.link} target="_blank">
            <img style={{height:575, margin:20, display: 'flex', flexDirection:'row', justifyContent:'center'}} src={imgUrl} alt="" />
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
    selectedPin: state.selectedPin,
    userInfo: state.currentUser
  }
}; 

export default connect(mapStateToProps)(Pin);
 
