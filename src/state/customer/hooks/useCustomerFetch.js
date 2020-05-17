import { useState } from 'react';
import config from '../../../config';

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
        `${config.CORE_SERVICE_ENDPOINT}/api/customers/get?email=${email}`,
        {
          method: 'GET',
        }
      );
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
      const response = await fetch(`${config.CORE_SERVICE_ENDPOINT}/api/customers/`, {
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
