import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import profileReducer from './profileReducer';
import playlistReducer from './playlistReducer';
import topReducer from './topReducer';
import playingReducer from './playingReducer';
import recommendedReducer from './recommendedReducer';

export default combineReducers({
  token: tokenReducer,
  profile: profileReducer,
  playlists: playlistReducer,
  top: topReducer,
  playing: playingReducer,
  recommended: recommendedReducer
});
