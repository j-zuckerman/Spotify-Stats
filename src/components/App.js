import React, { Component } from 'react';
import {
  fetchAccessToken,
  fetchUserProfile,
  fetchPlaylists,
  fetchTopArtists,
  fetchTopTracks,
  fetchRecentlyPlayed
} from '../actions';
import { connect } from 'react-redux';
import Playlists from './Playlists';
import Navbar from './Navbar';
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import RecentlyPlayedList from './RecentlyPlayedList';

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
  'playlist-read-private',
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
      this.props.fetchPlaylists(this.props.token);
      this.props.fetchTopArtists(this.props.token);
      this.props.fetchTopTracks(this.props.token);
      this.props.fetchRecentlyPlayed(this.props.token);
    }
  }
  render() {
    console.log(this.props.token);
    console.log(this.props.profile);
    console.log(this.props.playlists);
    console.log(this.props.tracks);
    console.log(this.props.artists);
    console.log(this.props.recentlyPlayed);

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
          {this.props.profile && <Navbar data={this.props.profile} />}

          {this.props.playlists && (
            <Playlists data={this.props.playlists.items} />
          )}

          {this.props.tracks && <TrackList data={this.props.tracks.items} />}
          {this.props.artists && <ArtistList data={this.props.artists.items} />}
          {this.props.recentlyPlayed && (
            <RecentlyPlayedList data={this.props.recentlyPlayed.items} />
          )}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token.token,
    profile: state.profile.profile,
    playlists: state.playlists.playlists,
    tracks: state.top.tracks,
    artists: state.top.artists,
    recentlyPlayed: state.playing.recentlyPlayed
  };
};
export default connect(
  mapStateToProps,
  {
    fetchAccessToken,
    fetchUserProfile,
    fetchPlaylists,
    fetchTopTracks,
    fetchTopArtists,
    fetchRecentlyPlayed
  }
)(App);
