import React, { Component } from 'react';
import { fetchRecommended } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Details, Image, Scroller, Container, Name } from './style.js';

class Recommended extends Component {
  componentDidMount() {
    this.props.fetchRecommended(
      this.props.token,
      this.props.features,
      this.props.songIDs
    );
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.recommended && (
          <Scroller>
            {this.props.recommended.tracks.map(track => (
              <Container key={track.id}>
                <Image src={track.album.images[0].url} />
                <Details>
                  <Name>{track.name}</Name>

                  <Button href={track.external_urls.spotify} target="_blank">
                    Listen to Song
                  </Button>
                </Details>
              </Container>
            ))}
          </Scroller>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token.token,
    recommended: state.recommended.recommended
  };
};
export default connect(
  mapStateToProps,
  {
    fetchRecommended
  }
)(Recommended);
