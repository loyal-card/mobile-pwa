import React from 'react';
import logo from './logo.svg';
import './App.css';
import createAuth0Client from '@auth0/auth0-spa-js';

function App() {
  let auth0;
  const redirect = async() => {
    // either with async/await
    auth0 = await createAuth0Client({
      domain: 'dev-l7c1wrq9.au.auth0.com',
      client_id: '4sh93YHeF9hWItsRv9qHQH31tudFKDpY'
    });
    await auth0.loginWithPopup();

    const user = await auth0.getUser();
    console.log(user);
  }

  const logout = async() => {
    // either with async/await

    auth0.logout({
      returnTo: 'https://localhost:3001/'
    });

  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={redirect}>Login</button>
        <button onClick={logout}>Log out</button>
      </header>
    </div>
  );
}

export default App;
