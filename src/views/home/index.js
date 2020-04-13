import React from 'react';
import Card from './elements/Card';
import GetCodeBtn from './elements/GetCodeBtn';
import StyledHome from '../styles/StyledHome';

const Home = (props) => {
  return (
    <StyledHome>
      <h1>CAFE NAME</h1>
      <Card />
      <GetCodeBtn text="GET CODE" />
    </StyledHome>
  );
};

export default Home;
