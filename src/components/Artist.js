import React, { Component } from 'react';
import styled from 'styled-components';

const ArtistImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

const ArtistDetails = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

const ViewArtistButton = styled.a`
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
class Artist extends Component {
  render() {
    return (
      <div>
        <ArtistImage src={this.props.data.images[0].url} />
        <ArtistDetails>
          {this.props.data.name}

          <ViewArtistButton
            href={this.props.data.external_urls.spotify}
            target="_blank"
          >
            View Artist
          </ViewArtistButton>
        </ArtistDetails>
      </div>
    );
  }
}

export default Artist;
