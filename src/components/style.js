import styled from 'styled-components';

export const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 1rem;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #2d2d2d;
  }
  &::-webkit-scrollbar-thumb {
    margin-top: 2px;
    width: 5px;
    background-color: #050404;
    border-radius: 50px;
  }
`;

export const Container = styled.div`
  margin: 0.6rem;
  position: relative;
`;

export const Image = styled.img`
  width: auto;
  height: 240px;
  border-radius: 0.5rem;
`;

export const Details = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: none;
  font-weight: 400;
  font-size: 1.3rem;
  ${Container}:hover & {
    display: block;
  }
`;
export const Name = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
export const Button = styled.a`
  display: block;
  padding: 0.5rem;
  border-radius: 0.6rem;
  color: white;
  background-color: #21b75d;
  margin-top: 1rem;
  text-decoration: none;
  z-index: 3;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h1`
  margin: 1rem;
  font-size: 1.75rem;
  font-weight: 250;
`;
