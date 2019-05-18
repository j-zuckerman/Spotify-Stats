import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Details, Image, Name, Container } from './style.js';

class RecentlyPlayed extends Component {
  render() {
    return (
      <div>
        <Container>
          <Image src={this.props.data.track.album.images[0].url} />
          <Details>
            <Name>{this.props.data.track.name}</Name>

            <Button
              href={this.props.data.track.external_urls.spotify}
              target="_blank"
            >
              Listen to Song
            </Button>
          </Details>
        </Container>
      </div>
    );
  }
}

export default RecentlyPlayed;
