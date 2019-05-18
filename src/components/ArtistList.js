import React, { Component } from 'react';
import styled from 'styled-components';
import Artist from './Artist';
import { Scroller, Title } from './style.js';

class ArtistList extends Component {
  render() {
    return (
      <section>
        <Title>Top Artists</Title>
        <Scroller>
          {this.props.data.map(artist => (
            <Artist data={artist} />
          ))}
        </Scroller>
      </section>
    );
  }
}

export default ArtistList;
