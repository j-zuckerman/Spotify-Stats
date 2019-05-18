import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Bottom = styled.div`
  display: flex;
  background-color: #312d33;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;
const BottomEnd = styled.span`
  display: flex;
`;
const GithubLink = styled.h1`
  font-weight: 250;
  color: white;
  text-decoration: none;
`;

class Footer extends Component {
  render() {
    return (
      <Bottom>
        <GithubLink>
          <a
            href="https://github.com/j-zuckerman/Spotify-Inspector"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
        </GithubLink>

        <BottomEnd>
          <h2> Made by James Zuckerman</h2>
        </BottomEnd>
      </Bottom>
    );
  }
}

export default Footer;
