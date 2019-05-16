import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  token: tokenReducer,
  profile: profileReducer
});
