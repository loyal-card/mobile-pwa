import authReducer from './auth/reducers';

export default ({ auth }, action) => ({
  auth: authReducer(auth, action),
});
