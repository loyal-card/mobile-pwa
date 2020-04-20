import { LOGIN, LOGOUT, SETUSERPORFILE } from './actions';

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
        ...state,
        authenticated: true,
      };

    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    case SETUSERPORFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
