import {observer} from 'mobx-react-lite';
import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {useStore} from '../../stores';

function CurrentUserComponent(): JSX.Element {
  const {authStore} = useStore();

  if (authStore.user) {
    return <Navbar.Text>{authStore.user.display_name}</Navbar.Text>;
  } else {
    return <Nav.Link onClick={() => authStore.authenticate()}>Login</Nav.Link>;
  }
}

export const CurrentUser = observer(CurrentUserComponent);
