import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStateValue } from '../state';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ auth }] = useStateValue();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
