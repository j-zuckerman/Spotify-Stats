import React, { Component } from 'react';
import { fetchAccessToken, fetchAudioFeatures } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Recommended from './Recommended';

const Title = styled.h1``;
const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

var listOfTrackIDs = [];
class RecommendedWrapper extends Component {
  componentDidMount() {
    this.props.tracks.forEach(track => {
      listOfTrackIDs.push(track.id);
    });

    this.props.recentlyPlayed.forEach(recent => {
      listOfTrackIDs.push(recent.track.id);
    });

    this.props.fetchAudioFeatures(this.props.token, listOfTrackIDs);
  }
  render() {
    console.log(this.props.features);
    return (
      <section>
        <Title>Recommended</Title>
        <Grid>
          {this.props.features && this.props.songIDs && (
            <Recommended
              features={this.props.features}
              songIDs={this.props.songIDs}
            />
          )}
        </Grid>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token.token,
    features: state.recommended.features,
    songIDs: state.recommended.randomSongIDs
  };
};
export default connect(
  mapStateToProps,
  {
    fetchAccessToken,
    fetchAudioFeatures
  }
)(RecommendedWrapper);
