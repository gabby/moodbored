import axios from 'axios';

// ACTION TYPES
const SET_CURRENT_PIN = 'SET_CURRENT_PIN';


// ACTION CREATORS
export const selectedPin = pin => ({ type:SET_CURRENT_PIN, pin});

// REDUCER
export default (selectedPin={}, action) => {
  switch(action.type){
    case SET_CURRENT_PIN: return action.pin; 
    default: return selectedPin; 
  }
}

//THUNK
export const setSelectedPin = pinId => dispatch => {
  console.log(pinId)
  return axios.get(`/api/pins/${pinId}`)
  .then(res => (res.data))
  .then(newPin => {
    // console.log('This is the newpin')
    // console.log(newPin);
    dispatch(selectedPin(newPin));
  })
  .catch(console.error);
}
