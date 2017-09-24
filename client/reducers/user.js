import axios from 'axios';
import { fetchPins, resetPins } from './'

// ACTION TYPES
const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

// ACTION CREATORS
export const setUser = (user) => ({ type:SET_USER, user });
export const removeUser = () => ({type:REMOVE_USER});

// REDUCER
export default (currentUser={}, action) => {
  switch(action.type){
    case SET_USER: return action.user; 
    case REMOVE_USER: return {};
    default: return currentUser; 
  }
}

//THUNK
export const fetchUser = () => dispatch => {
  return axios.get('/auth/me')
  .then(res => res.data)
  .then(user => {
    dispatch(setUser(user));
    return user;
  })
  .then(newUser => {
    dispatch(fetchPins(newUser.id))
  })
  .catch(console.error);
}

export const logout = () => dispatch => {
  dispatch(removeUser());
  dispatch(resetPins());
  axios.delete('/auth/me/logout')
  .catch(err => console.error('logout unsuccessful', err));
}; 