//Actions
//All api calls will be in here
import axios from 'axios';
import hash from '../hash';

export const authEndpoint = 'https://accounts.spotify.com/authorize?';

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
export const fetchPlaylists = token => async dispatch => {
  const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  console.log(response);
  dispatch({ type: 'FETCH_PLAYLISTS', payload: response.data });
};

//Fetch top tracks
export const fetchTopTracks = token => async dispatch => {
  const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
  console.log(response);
  dispatch({ type: 'FETCH_TOP_TRACKS', payload: response.data });
};

//Fetch top artists
export const fetchTopArtists = token => async dispatch => {
  const response = await axios.get(
    'https://api.spotify.com/v1/me/top/artists',
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  );
  console.log(response);
  dispatch({ type: 'FETCH_TOP_ARTISTS', payload: response.data });
};

//Fetch recently played
export const fetchRecentlyPlayed = token => async dispatch => {
  const response = await axios.get(
    'https://api.spotify.com/v1/me/player/recently-played',
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  );
  console.log(response);
  dispatch({ type: 'FETCH_RECENTLY_PLAYED', payload: response.data });
};

//Fetch currently playing song
