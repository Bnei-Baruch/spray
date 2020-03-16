import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
//import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory as createHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './redux/store';
import { loadUser } from 'redux-oidc';

import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import * as env from './helpers/env';
import userManager from './helpers/userManager';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const history: History = createHistory({
    basename: env.HISTORY_BASENAME,
})

const middleware = [routerMiddleware(history)];

const store = configureStore({
  reducer: createRootReducer(history),
  middleware,
})
  
// we have silent_renew configured so we use this instead of the oidc-middleware
loadUser(store, userManager);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
