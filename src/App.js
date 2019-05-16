import React, { Component } from 'react';
import hash from './hash';
import axios from 'axios';

export const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'd72d96a9dcab41c2852bc01b8c22aec6';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-email', 'user-read-playback-state'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      userDetails: null
    };
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      });
      this.fetchUserProfile(_token);
    }
  }

  fetchUserProfile = async token => {
    let headers = new Headers();
    console.log(token);
    headers.append('Authorization', 'Bearer ' + token);
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    console.log(response);
  };

  render() {
    console.log(this.state.userDetails);
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                '%20'
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && <h1>Logged in succesfully</h1>}
          {this.state.userDetails && <h1>User details fetched</h1>}
        </header>
      </div>
    );
  }
}
export default App;
