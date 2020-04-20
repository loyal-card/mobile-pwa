import { useStateValue } from '../../index';
import { login, setUserProfile } from '../actions';
import Auth0Lock from 'auth0-lock';
const useAuth = () => {
  const [{ auth }, dispatch] = useStateValue();

  var lock = new Auth0Lock(
    '4sh93YHeF9hWItsRv9qHQH31tudFKDpY',
    'dev-l7c1wrq9.au.auth0.com',
    {
      auth: {
        audience: 'https://localhost:5000',
      },
    }
  );

  lock.on('authenticated', function (authResult) {
    // Use the token in authResult to getUserInfo() and save it if necessary
    let expiredTimeStamp = new Date().getTime() / 1000 + authResult.expiresIn;
    window.localStorage.setItem('auth0ExpiresIn', expiredTimeStamp);
    window.localStorage.setItem('auth0AccessToken', authResult.accessToken);
    lock.hide();
    dispatch(login());
  });
  const getUserProfile = () => {
    lock.checkSession({}, function (error, authResult) {
      if (error || !authResult) {
        lock.show();
      } else {
        // user has an active session, so we can use the accessToken directly.
        lock.getUserInfo(authResult.accessToken, function (error, profile) {
          if (error) {
            return;
          }
          dispatch(setUserProfile(profile));
        });
      }
    });
  };

  const signIn = () => {
    lock.show();
  };

  const siginOut = async () => {
    // either with async/await

    lock.logout();
  };

  return [{ auth }, signIn, siginOut, getUserProfile];
};

export default useAuth;
