import { useState } from 'react';
import { useStateValue } from '../../index';
import socketIOClient from 'socket.io-client';
import config from '../../../config';

const useCodeFetch = () => {
  const [codeUrl, setCodeUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [afterPurchaseData, setAfterPurchaseData] = useState(null);

  const [{ auth }] = useStateValue();
  const socketEnpoint = config.CORE_SERVICE_ENDPOINT;
  const socket = socketIOClient(socketEnpoint);
  let customerEmail = auth.profile && auth.profile.email;
  socket.on(`FromAPI-${customerEmail}`, (data) => {
    console.log(data);
    setAfterPurchaseData(data);
  });

  const fetchCode = async (method) => {
    setLoading(true);
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const response = await fetch(
        `${config.CORE_SERVICE_ENDPOINT}/api/code/get-code`,
        {
          method: 'GET',
          headers: {
            ContentType: 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        }
      );
      const result = await response.text();
      let customerEmail = auth.profile && auth.profile.email;
      setCodeUrl(`${result}&email=${customerEmail}&method=${method}`);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return [{ codeUrl, loading, error }, fetchCode];
};

export default useCodeFetch;
