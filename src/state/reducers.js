import authReducer from './auth/reducers';

export default ({ auth, product }, action) => ({
  auth: authReducer(auth, action),
});
