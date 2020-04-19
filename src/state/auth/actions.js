export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/CLEAR_USER';
export const SETUSERPORFILE = 'auth/SET_USER_PROFILE';
export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setUserProfile = (profile) => ({
  type: SETUSERPORFILE,
  payload: profile,
});
