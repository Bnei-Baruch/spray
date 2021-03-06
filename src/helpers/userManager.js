import { Log as oidclog, WebStorageStateStore } from 'oidc-client';
import { createUserManager } from 'redux-oidc';

import { AUTH_URL, BASE_URL } from './env';

oidclog.logger = console;
oidclog.level  = 4;

const userManagerConfig = {
  client_id: 'spray',
  redirect_uri: `${BASE_URL}/callback`,
  response_type: 'token id_token',
  scope: 'openid profile',
  authority: AUTH_URL,
  post_logout_redirect_uri: `${BASE_URL}/`,
  automaticSilentRenew: true,
  silent_redirect_uri: `${BASE_URL}/silent_renew.html`,

  userStore: new WebStorageStateStore({ store: localStorage }),
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
