import { createSlice } from '@reduxjs/toolkit';
import { USER_EXPIRED, USER_FOUND, USER_LOADED, USER_SIGNED_OUT } from 'redux-oidc';
import { jws } from 'jsrsasign';

import api from '../helpers/apiClient';

const onUser = (state, action) => {
	console.log('onUser', state, action);
  const user = action.payload;

  // Keycloak special handling
  // We decode the access token for the user's roles
  const { payloadObj: { realm_access, resource_access } } = jws.JWS.parse(user.access_token);
  user.realm_access                                       = realm_access;  // eslint-disable-line camelcase
  user.resource_access                                    = resource_access; // eslint-disable-line camelcase

  // Add 'Authorization' header to api client
  api.defaults.headers.common.Authorization = `${user.token_type} ${user.access_token}`;

  return { user };
};

const onNoUser = () => {
	console.log('onNoUser');
  // Remove Authorization header from api client
  delete api.defaults.headers.common.Authorization;

  return { user: null };
};

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    [USER_LOADED]: onUser,
    [USER_FOUND]: onUser,
    [USER_EXPIRED]: onNoUser,
    [USER_SIGNED_OUT]: onNoUser,
  },
});

//export const { USER_EXPIRED, USER_FOUND, USER_LOADED, USER_SIGNED_OUT } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;
