import React, { Component } from 'react';
import styled from 'styled-components';
import RecentlyPlayed from './RecentlyPlayed';
import { Scroller, Title } from './style.js';

class RecentlyPlayedList extends Component {
  render() {
    return (
      <section>
        <Title>Recently Played</Title>
        <Scroller>
          {this.props.data.map(recent => (
            <RecentlyPlayed data={recent} />
          ))}
        </Scroller>
      </section>
    );
  }
}

export default RecentlyPlayedList;
