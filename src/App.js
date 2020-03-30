import React from 'react';
import logo from './logo.svg';
import './App.css';
// import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Lock from "auth0-lock";
import socketIOClient from "socket.io-client";

function App() {
  var lock = new Auth0Lock(
    '4sh93YHeF9hWItsRv9qHQH31tudFKDpY',
    'dev-l7c1wrq9.au.auth0.com',{
      auth: {
        audience: 'https://localhost:5000',
      }
    }
  );

  const socketEnpoint = 'http://localhost:5000'
  const socket = socketIOClient(socketEnpoint);
  socket.on("FromAPI", data => console.log(data));

  lock.on("authenticated", function(authResult) {
    // Use the token in authResult to getUserInfo() and save it if necessary
    console.log(authResult.accessToken)
    window.sessionStorage.setItem('accessToken', authResult.accessToken)
    this.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }

      console.log(profile)

    });
  });


  const redirect = async() => {
    // either with async/await
    // auth0 = await createAuth0Client({
    //   domain: 'dev-l7c1wrq9.au.auth0.com',
    //   audience: 'https://localhost:5000',
    //   client_id: '4sh93YHeF9hWItsRv9qHQH31tudFKDpY'
    // });
    // await auth0.loginWithPopup();

    // const user = await auth0.getUser();
    // console.log(user);
    lock.show();
  }

  const logout = async() => {
    // either with async/await

    lock.logout();
  }
  
  const getCode = async() => {
    //const accessToken = await auth0.getTokenSilently();
    const accessToken = window.sessionStorage.getItem('accessToken')
    const result = await fetch('http://localhost:5000/api/get-code', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
    
    console.log(result);

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
        <button onClick={getCode}>Get code</button>

      </header>
    </div>
  );
}

export default App;
