import { useState } from 'react';
const useCustomerFetch = () => {
  const [customerDetail, setCustomerDetail] = useState(null);
  const [customerDetailChecked, setDetailChecked] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);
  const [dataError, setDataError] = useState(false);

  const fetchCustomerDetails = async (email) => {
    setProfileLoading(true);
    setDetailChecked(false);
    const accessToken = window.localStorage.getItem('accessToken');
    try {
      const response = await fetch(
        `http://localhost:5000/api/customer/get?email=${email}`,
        {
          method: 'GET',
        }
      );
      // response.ok ?
      if (response.ok) {
        const result = await response.json();
        setCustomerDetail(result);
      }
    } catch (dataError) {
      setDataError(true);
    }
    setProfileLoading(false);
    setDetailChecked(true);
  };

  const createCustomer = async (username, email) => {
    setProfileLoading(true);
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
    } catch (dataError) {
      setDataError(true);
    }
    setProfileLoading(false);
  };

  return [
    { customerDetail, customerDetailChecked, profileLoading, dataError },
    { fetchCustomerDetails, createCustomer },
  ];
};

export default useCustomerFetch;
