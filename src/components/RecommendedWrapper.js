import React, { Component } from 'react';
import { fetchAccessToken, fetchAudioFeatures } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Recommended from './Recommended';
import { Title } from './style.js';

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

        {this.props.features && this.props.songIDs && (
          <Recommended
            features={this.props.features}
            songIDs={this.props.songIDs}
          />
        )}
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
