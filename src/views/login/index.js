import React, { useEffect } from 'react';

import useAuth from '../../state/auth/hooks/auth';
const Login = (props) => {
  const { from } = props.location.state || { from: { pathname: '/home' } };

  const [{ auth }, signIn] = useAuth();

  useEffect(() => {
    if (auth.authenticated) {
      props.history.push(from);
    } else {
      signIn();
    }
  }, [auth]);

  return <div></div>;
};

export default Login;
