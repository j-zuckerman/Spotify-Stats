//Actions
//All api calls will be in here
import axios from 'axios';
import hash from '../hash';

export const authEndpoint = 'https://accounts.spotify.com/authorize?';

const clientId = 'd72d96a9dcab41c2852bc01b8c22aec6';
const redirectUri = 'http://localhost:3000'; //change later
const scopes = [
  'user-read-email',
  'user-read-recently-played',
  'user-library-read',
  'user-follow-read',
  'user-top-read',

  'user-read-playback-state'
];

//Action creators
export const fetchAccessToken = () => async dispatch => {
  let token = hash.access_token;
  if (token) dispatch({ type: 'FETCH_TOKEN', payload: token });
};

//Fetch user details
export const fetchUserProfile = token => async dispatch => {
  const response = await axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  console.log(response);
  dispatch({ type: 'FETCH_USER_PROFILE', payload: response.data });
};

//Fetch playlists

//Fetch favorites

//Fetch top tracks

//Fetch currently playing song
