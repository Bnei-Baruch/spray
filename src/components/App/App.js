import React from 'react';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { ConnectedRouter } from 'connected-react-router';
import Main from '../Main/Main';
import styles from './App.module.css';
import userManager from '../../helpers/userManager';

const App = (props) => {
  const {store, history} = props;
	console.log('store', store);
  return (
    <Provider store={store} className={styles.app}>
      <OidcProvider store={store} userManager={userManager}>
        <ConnectedRouter history={history}>
          <Main />
        </ConnectedRouter>
      </OidcProvider>
    </Provider>
  );
}

export default App;
