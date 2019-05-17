import React, { Component } from 'react';
import styled from 'styled-components';

const PlaylistImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

const PlaylistDetails = styled.div`
  text-align: center;
  padding: 1rem;
`;

const ViewPlaylistButton = styled.a`
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: white;
  background-color: green;
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
class Playlist extends Component {
  render() {
    return (
      <div>
        <PlaylistImage src={this.props.data.images[0].url} />
        <PlaylistDetails>
          <h2>{this.props.data.name}</h2>
          <ViewPlaylistButton
            href={this.props.data.external_urls.spotify}
            target="_blank"
          >
            View Playlist
          </ViewPlaylistButton>
        </PlaylistDetails>
      </div>
    );
  }
}

export default Playlist;
