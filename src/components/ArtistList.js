import React, { Component } from 'react';
import styled from 'styled-components';
import Artist from './Artist';

const Title = styled.h1``;
const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
class ArtistList extends Component {
  render() {
    return (
      <section>
        <Title>Top Artists</Title>
        <Grid>
          {this.props.data.map(artist => (
            <Artist data={artist} />
          ))}
        </Grid>
      </section>
    );
  }
}

export default ArtistList;
