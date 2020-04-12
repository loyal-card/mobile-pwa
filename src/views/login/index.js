import React, { useEffect } from 'react';

import useAuth from '../../state/auth/hooks/auth';

const Login = (props) => {
  const { from } = props.location.state || { from: { pathname: '/home' } };

  const [auth, signIn] = useAuth();
  useEffect(() => {
    console.log(JSON.stringify(auth));
    if (auth.authenticated) {
      debugger;
      props.history.push(from);
    }
  }, [auth]);

  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      <button>Register</button>
    </div>
  );
};

export default Login;
