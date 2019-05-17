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
import styled from 'styled-components';
import Playlists from './Playlists';
import Navbar from './Navbar';
import TrackList from './TrackList';
import ArtistList from './ArtistList';
import RecentlyPlayedList from './RecentlyPlayedList';
import bg from './bg.jpg';
import RecommendedWrapper from './RecommendedWrapper';

var redirectUri = '';
export const authEndpoint = 'https://accounts.spotify.com/authorize?';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'd72d96a9dcab41c2852bc01b8c22aec6';
if (process.env.NODE_ENV === 'development')
  redirectUri = 'http://localhost:3000';
else if (process.env.NODE_ENV === 'production')
  redirectUri = 'https://react-spotify-db.herokuapp.com/';
const scopes = [
  'user-read-email',
  'user-read-recently-played',
  'user-library-read',
  'user-follow-read',
  'user-top-read',
  'playlist-read-private',
  'user-read-playback-state'
];

const Landing = styled.div`
  background: url(${bg}) no-repeat center center/cover;
  height: 100vh;
  position: relative;
`;
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Details = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Description = styled.h2`
  font-size: 1.8rem;
`;
const ConnectButton = styled.a`
  text-transform: uppercase;
  color: white;
  background-color: #1db954;
  padding: 0.5rem 1rem;
  letter-spacing: 0.1rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }
`;

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
      <div>
        {!this.props.token && (
          <Landing>
            <Overlay>
              <Details>
                <Description>
                  A webapp which connects to your Spotify account. View your
                  playlists, top tracks/artists, discover new music, and more!
                </Description>
                <ConnectButton
                  href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    '%20'
                  )}&response_type=token&show_dialog=true`}
                >
                  Connect with spotify
                </ConnectButton>
              </Details>
            </Overlay>
          </Landing>
        )}
        {this.props.profile && <Navbar data={this.props.profile} />}
        {this.props.tracks && this.props.recentlyPlayed && (
          <RecommendedWrapper
            tracks={this.props.tracks.items}
            recentlyPlayed={this.props.recentlyPlayed.items}
          />
        )}
        {this.props.playlists && (
          <Playlists data={this.props.playlists.items} />
        )}

        {this.props.tracks && <TrackList data={this.props.tracks.items} />}
        {this.props.artists && <ArtistList data={this.props.artists.items} />}

        {this.props.recentlyPlayed && (
          <RecentlyPlayedList data={this.props.recentlyPlayed.items} />
        )}
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
