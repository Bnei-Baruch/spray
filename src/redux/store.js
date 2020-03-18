import { connectRouter } from 'connected-react-router';
import { reducer as oidc } from 'redux-oidc';

import counterReducer from '../features/counter/counterSlice';
import userReducer from './user';

const createRootReducer = (history) => ({
  router: connectRouter(history),
  oidc,
  counter: counterReducer,
	user: userReducer,
});

export default createRootReducer;
