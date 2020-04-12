import { LOGIN, LOGOUT } from './actions';

export const INITIAL_STATE = {
  authenticated: false,
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
