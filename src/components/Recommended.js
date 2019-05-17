import React, { Component } from 'react';
import { fetchRecommended } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const RecommendedAlbumImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

const RecommendedDetails = styled.div`
  text-align: center;
  padding: 0.5rem;
`;

const ListenButton = styled.a`
  display: block;
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: white;
  background-color: #21b75d;
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

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
          <Grid>
            {this.props.recommended.tracks.map(track => (
              <React.Fragment>
                <RecommendedAlbumImage src={track.album.images[0].url} />
                <RecommendedDetails>
                  {track.name}

                  <ListenButton
                    href={track.external_urls.spotify}
                    target="_blank"
                  >
                    Listen to Song
                  </ListenButton>
                </RecommendedDetails>
              </React.Fragment>
            ))}
          </Grid>
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
