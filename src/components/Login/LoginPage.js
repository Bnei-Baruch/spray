import React from 'react';
import logo from '../../spray.jpg';
import styles from './Login.module.css';
import {
    Button,
    Grid,
    Image,
    Segment,
} from 'semantic-ui-react';

import userManager from '../../helpers/userManager';

const LoginPage = (props) => {

  const handleLogin = (e) => {
    e.preventDefault();

    // keep current location in state so we'll have it once auth is complete
    // and we're back in the app.
    // We need this to redirect the user to location he wanted in the first place.
    const { location } = props;
    userManager.signinRedirect({ state: JSON.stringify({ location }) });
  };

  const renderSilentSigninStatus = () => {};

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className={styles.login}
    >
      <Grid.Column className={styles.box}>
        <Segment raised padded="very" color="blue">
          <Image src={logo} centered />
          <h3>Welcome to BB Spray app!</h3>
          <p>Please log in to continue</p>
          <Button primary size="huge" onClick={handleLogin}>Login</Button>
          {renderSilentSigninStatus()}
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default LoginPage;
