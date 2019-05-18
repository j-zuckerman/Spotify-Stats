import React, { Component } from 'react';
import styled from 'styled-components';
import Track from './Track';
import { Scroller, Title } from './style.js';

class TrackList extends Component {
  render() {
    return (
      <section>
        <Title>Top Tracks</Title>
        <Scroller>
          {this.props.data.map(track => (
            <Track data={track} />
          ))}
        </Scroller>
      </section>
    );
  }
}

export default TrackList;
