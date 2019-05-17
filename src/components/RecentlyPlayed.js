import React, { Component } from 'react';
import styled from 'styled-components';

const RecentlyPlayedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

const RecentlyPlayedDetails = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

const ListenButton = styled.a`
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: white;
  background-color: #21b75d;
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
class RecentlyPlayed extends Component {
  render() {
    return (
      <div>
        <RecentlyPlayedImage src={this.props.data.track.album.images[0].url} />
        <RecentlyPlayedDetails>
          {this.props.data.track.name}

          <ListenButton
            href={this.props.data.track.external_urls.spotify}
            target="_blank"
          >
            Listen to Song
          </ListenButton>
        </RecentlyPlayedDetails>
      </div>
    );
  }
}

export default RecentlyPlayed;
