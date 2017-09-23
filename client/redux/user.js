import axios from 'axios';

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
    case REMOVE_USER: return null;
    default: return user; 
  }
}

//THUNK
export const fetchUser = () => dispatch => {
  return axios.get('/api/auth/me')
  .then(res => res.data)
  .then(user => {
    dispatch(setUser(user));
  })
  .catch(console.error);
}

export const logout = () => dispatch => {
  dispatch(removeUser());
  axios.delete('/api/auth/me')
  .catch(err => console.error('logout unsuccessful', err));
}; 