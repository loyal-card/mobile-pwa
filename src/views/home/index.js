import React, { useEffect } from 'react';
import Card from './elements/Card';
import GetCodeBtn from './elements/GetCodeBtn';
import Title from './elements/Title';
import StyledHome from '../styles/StyledHome';
import useCodeFetch from '../../state/card/hooks/codeFetch';
import QRCode from 'qrcode.react';

const Home = (props) => {
  const [{ codeUrl, loading, error }, fetchCode] = useCodeFetch();

  useEffect(() => {
    //fetchCode();
  }, [codeUrl]);

  return (
    <StyledHome>
      <Title text="CAFE NAME" />
      <Card />
      <GetCodeBtn text="GET CODE" callback={fetchCode} />
      {codeUrl && <QRCode value={codeUrl} />}
    </StyledHome>
  );
};

export default Home;
