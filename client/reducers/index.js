import { combineReducers } from 'redux';
import currentUser from './user';
import allPins from './pins';


export default combineReducers({
  currentUser,
  allPins
})

export * from './user'
export * from './pins'

