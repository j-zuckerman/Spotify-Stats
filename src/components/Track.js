import React, { Component } from 'react';
import styled from 'styled-components';

const TrackImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

const TrackDetails = styled.div`
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
class Track extends Component {
  render() {
    return (
      <div>
        <TrackImage src={this.props.data.album.images[0].url} />
        <TrackDetails>
          {this.props.data.name}

          <ListenButton
            href={this.props.data.external_urls.spotify}
            target="_blank"
          >
            Listen to Song
          </ListenButton>
        </TrackDetails>
      </div>
    );
  }
}

export default Track;
