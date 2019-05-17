import React, { Component } from 'react';
import styled from 'styled-components';
import Playlist from './Playlist';
import RecentlyPlayed from './RecentlyPlayed';

const Title = styled.h1``;
const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
class RecentlyPlayedList extends Component {
  render() {
    return (
      <section>
        <Title>Recently Played</Title>
        <Grid>
          {this.props.data.map(recent => (
            <RecentlyPlayed data={recent} />
          ))}
        </Grid>
      </section>
    );
  }
}

export default RecentlyPlayedList;
