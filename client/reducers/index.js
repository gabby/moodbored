import { combineReducers } from 'redux';
import currentUser from './user';

export default combineReducers({
  currentUser
})

export * from './user'

