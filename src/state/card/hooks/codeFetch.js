import { useState } from 'react';
import { useStateValue } from '../../index';

const useCodeFetch = () => {
  const [codeUrl, setCodeUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [{ auth }] = useStateValue();

  const fetchCode = async (method) => {
    setLoading(true);
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const response = await fetch('http://localhost:5000/api/code/get-code', {
        method: 'GET',
        headers: {
          ContentType: 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      });
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
