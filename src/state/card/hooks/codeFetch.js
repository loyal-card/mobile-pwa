import { useState } from 'react';

const useCodeFetch = () => {
  const [codeUrl, setCodeUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchCode = async () => {
    setLoading(true);
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const result = await fetch('http://localhost:5000/api/get-code', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
      setCodeUrl(result);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return [{ codeUrl, loading, error }, fetchCode];
};

export default useCodeFetch;
