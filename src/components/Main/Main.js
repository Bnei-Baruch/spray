import React from 'react';
import {
    Header,
} from 'semantic-ui-react';
import { useSelector } from 'react-redux';

import LoginRoutes from '../Login/LoginRoutes';

import {selectUser} from '../../redux/user'

const Main = (props) => {
  const {user} = useSelector(selectUser);
  console.log(user);

  if (!user || user.expired) {
    return (
      <div>
        <LoginRoutes />
      </div>
    );
  }
  return (
    <Header>This is main page.</Header>
  );
}

export default Main;
