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

//Fetch audio features of multiple songs
export const fetchAudioFeatures = (token, listofIDs) => async dispatch => {
  let idString = '';
  for (let i = 0; i < listofIDs.length; i++) {
    idString += listofIDs[i] + ',';
  }
  let idStringWithCommas = idString.slice(0, idString.length - 1);
  let randomSongIDs = getRandom(listofIDs, 3);
  const response = await axios.get(
    'https://api.spotify.com/v1/audio-features/?ids=' + idStringWithCommas,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  );

  dispatch({
    type: 'FETCH_AUDIO_FEATURES',
    payload: response.data,
    randomSongIDs: randomSongIDs
  });
};

//Fetch recommended
export const fetchRecommended = (
  token,
  features,
  songIDs
) => async dispatch => {
  let idString = '';
  for (let i = 0; i < songIDs.length; i++) {
    idString += songIDs[i] + ',';
  }
  let idStringWithCommas = idString.slice(0, idString.length - 1);
  const endpoint = `https://api.spotify.com/v1/recommendations?seed_tracks=${idStringWithCommas}&min_popularity=65&target_danceability=${features.danceability.toFixed(
    1
  )}&target_valence=${features.valence.toFixed(
    1
  )}&target_energy=${features.energy.toFixed(1)}`;

  const response = await axios.get(endpoint, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });

  //Extract out the track ids from recommended then convert to string
  let songListIDs = [];
  let songListIDsString = '';

  response.data.tracks.forEach(element => {
    songListIDs.push(element.id);
  });

  for (let i = 0; i < songListIDs.length; i++) {
    songListIDsString += songListIDs[i] + ',';
  }
  let songListIDsStringWithCommas = songListIDsString.slice(
    0,
    songListIDsString.length - 1
  );
  console.log(songListIDsStringWithCommas);
  //Make API call to tracks endpoint with list of track ids
  const finalResponse = await axios.get(
    'https://api.spotify.com/v1/tracks/?ids=' + songListIDsStringWithCommas,
    {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  );
  console.log(response);
  dispatch({ type: 'FETCH_RECOMMENDED', payload: finalResponse.data });
};

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError('getRandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
