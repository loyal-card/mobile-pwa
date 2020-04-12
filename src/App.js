import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from './state';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from './state/auth/reducers';
import reducers from './state/reducers';
import PrivateRoute from './routes/private-route';
import Login from './views/login';
import Home from './views/home';

const App = (props) => {
  const initialState = {
    auth: AUTH_INITIAL_STATE,
  };
  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </Router>
    </StateProvider>
  );
};

export default App;
