import React, { useEffect } from 'react';
import Card from './elements/Card';
import GetCodeBtn from './elements/GetCodeBtn';
import Title from './elements/Title';
import StyledHome from '../styles/StyledHome';
import useCodeFetch from '../../state/card/hooks/codeFetch';
import useCustomerFetch from '../../state/customer/hooks/userCustomerFetch';
import QRCode from 'qrcode.react';

const Home = (props) => {
  const [{ codeUrl, loading, error }, fetchCode] = useCodeFetch();
  const [
    { customerDetail, customerDetailChecked, loading, error },
    fetchCustomerDetails,
    createCustomer,
  ] = useCustomerFetch();
  const [{ auth }] = useAuth();
  useEffect(() => {
    if (auth.profile && !customerDetail) {
      console.log(JSON.stringify(auth.profile));
      if (customerDetailChecked) {
        createCustomer(auth.profile.username, auth.profile.email);
      } else {
        fetchCustomerDetails(auth.profile.email);
      }
    }
  }, [codeUrl, auth.profile, customerDetailChecked, customerDetail]);

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
