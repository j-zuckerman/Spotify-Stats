import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Details, Image, Container, Name } from './style.js';

class Artist extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.data.images[0].url} />
        <Details>
          <Name>{this.props.data.name}</Name>

          <Button href={this.props.data.external_urls.spotify} target="_blank">
            View Artist
          </Button>
        </Details>
      </Container>
    );
  }
}

export default Artist;
