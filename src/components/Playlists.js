//playlist url - items[""0""].external_urls.spotify
//playlist img - items[""0""].images[""0""].url
// name

import React, { Component } from 'react';
import styled from 'styled-components';
import Playlist from './Playlist';
import { Scroller, Title } from './style.js';

class Playlists extends Component {
  render() {
    return (
      <section>
        <Title>Playlists</Title>
        <Scroller>
          {this.props.data.map(playlist => (
            <Playlist data={playlist} />
          ))}
        </Scroller>
      </section>
    );
  }
}

export default Playlists;
