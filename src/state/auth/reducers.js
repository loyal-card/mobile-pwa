import { LOGIN, LOGOUT } from './actions';

const expiredTimeStamp = window.localStorage.getItem('auth0ExpiresIn');
export const INITIAL_STATE = {
  authenticated:
    expiredTimeStamp && expiredTimeStamp - new Date().getTime() / 1000 > 0,

  profile: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };

    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
