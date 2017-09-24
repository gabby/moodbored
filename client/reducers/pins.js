import axios from 'axios';

// ACTION TYPES
const SET_PINS = 'SET_PINS';
const RESET_PINS = 'RESET_PINS';


// ACTION CREATORS
export const fetchAllPins = pins => ({ type:SET_PINS, pins});
export const resetPins = () => ({ type:RESET_PINS});

// REDUCER
export default (allPins=[], action) => {
  switch(action.type){
    case SET_PINS: return [...allPins, action.pins]; 
    case RESET_PINS: return [];
    default: return allPins; 
  }
}

//THUNK
export const fetchPins = pinId => dispatch => {
  return axios.get(`/api/pins/${pinId}`)
  .then(res => res.data)
  .then(pin => {
    dispatch(fetchAllPins(pin));
  })
  .catch(console.error);
}
