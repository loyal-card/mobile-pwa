import { useState } from 'react';
import { useStateValue } from '../../index';
import { login } from '../actions';

const useAuth = () => {
  const [{ auth }, dispatch] = useStateValue();
};

export default useAuth;
