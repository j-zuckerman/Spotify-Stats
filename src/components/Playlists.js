//playlist url - items[""0""].external_urls.spotify
//playlist img - items[""0""].images[""0""].url
// name

import React, { Component } from 'react';
import styled from 'styled-components';
import Playlist from './Playlist';

const Title = styled.h1``;
const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
class Playlists extends Component {
  render() {
    return (
      <section>
        <Title>Playlists</Title>
        <Grid>
          {this.props.data.map(playlist => (
            <Playlist data={playlist} />
          ))}
        </Grid>
      </section>
    );
  }
}

export default Playlists;
