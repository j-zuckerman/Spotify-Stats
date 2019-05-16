import React, { Component } from 'react';
import { fetchAccessToken, fetchUserProfile } from '../actions';
import { connect } from 'react-redux';

export const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'd72d96a9dcab41c2852bc01b8c22aec6';
const redirectUri = 'http://localhost:3000';
const scopes = [
  'user-read-email',
  'user-read-recently-played',
  'user-library-read',
  'user-follow-read',
  'user-top-read',

  'user-read-playback-state'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      userDetails: null
    };
  }
  componentDidMount() {
    this.props.fetchAccessToken();
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.token !== prevProps.token) {
      this.props.fetchUserProfile(this.props.token);
    }
  }
  render() {
    console.log(this.props.token);
    console.log(this.props.profile);
    return (
      <div className="App">
        <header className="App-header">
          {!this.props.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                '%20'
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.props.profile && (
            <h1>Hello, {this.props.profile.display_name}</h1>
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { token: state.token.token, profile: state.profile.profile };
};
export default connect(
  mapStateToProps,
  {
    fetchAccessToken,
    fetchUserProfile
  }
)(App);
