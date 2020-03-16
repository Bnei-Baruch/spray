import React from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { ConnectedRouter } from 'connected-react-router';
import LoginRoutes from '../Login/LoginRoutes';
import styles from './App.module.css';
import userManager from '../../helpers/userManager';

const App = (props) => {
  const {store, history} = props;
  return (
    <Provider store={store} className={styles.app}>
      <OidcProvider store={store} userManager={userManager}>
        <ConnectedRouter history={history}>
          <LoginRoutes />
        </ConnectedRouter>
      </OidcProvider>
    </Provider>
  );
}

export default App;
