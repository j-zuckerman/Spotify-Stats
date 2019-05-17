import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Nav = styled.div`
  display: flex;
  background-color: #312d33;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;
const NavEnd = styled.span`
  display: flex;
`;
const Title = styled.h1`
  font-weight: 250;
`;
class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Title>Spotify Dashboard</Title>

        <NavEnd>
          <h2>{this.props.data.display_name}</h2>
        </NavEnd>
      </Nav>
    );
  }
}

export default Navbar;
