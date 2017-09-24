import { combineReducers } from 'redux';
import currentUser from './user';
import allPins from './pins';
import selectedPin from './selectedPin';


export default combineReducers({
  currentUser,
  allPins,
  selectedPin
})

export * from './user'
export * from './pins'
export * from './selectedPin'

