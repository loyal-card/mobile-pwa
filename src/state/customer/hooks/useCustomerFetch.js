import { useState } from 'react';
const useCustomerFetch = () => {
  const [customerDetail, setCustomerDetail] = useState(null);
  const [customerDetailChecked, setDetailChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchCustomerDetails = async (email) => {
    setLoading(true);
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const response = await fetch(
        `http://localhost:5000/api/customer/get?email=${email}`,
        {
          method: 'GET',
        }
      );
      if (response.ok) {
        const result = await response.json();
        setCustomerDetail(result);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
    setDetailChecked(true);
  };

  const createCustomer = async (username, email) => {
    setLoading(true);
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const response = await fetch(`http://localhost:5000/api/customer/`, {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          email: email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();

      setCustomerDetail(result);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return [
    { customerDetail, customerDetailChecked, loading, error },
    fetchCustomerDetails,
    createCustomer,
  ];
};

export default useCustomerFetch;
