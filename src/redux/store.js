import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import { reducer as oidc } from 'redux-oidc';

import counterReducer from '../features/counter/counterSlice';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  oidc,
  counter: counterReducer,
});

export default createRootReducer;
