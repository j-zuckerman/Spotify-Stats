import React, { Component } from 'react';
import styled from 'styled-components';
import Track from './Track';

const Title = styled.h1``;
const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
class TrackList extends Component {
  render() {
    return (
      <section>
        <Title>Top Tracks</Title>
        <Grid>
          {this.props.data.map(track => (
            <Track data={track} />
          ))}
        </Grid>
      </section>
    );
  }
}

export default TrackList;
