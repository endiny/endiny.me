import { observer } from 'mobx-react-lite';
import { Nav, Navbar, Spinner } from 'react-bootstrap';
import { useStore } from '../../stores';

function CurrentUserComponent(): JSX.Element {
  const { authStore } = useStore();

  if (authStore.isLoading) {
    return <Spinner animation="border" />;
  } else if (authStore.user) {
    return <Navbar.Text>{authStore.user.display_name}</Navbar.Text>;
  } else {
    return <Nav.Link onClick={() => authStore.authenticate()}>Login</Nav.Link>;
  }
}

export const CurrentUser = observer(CurrentUserComponent);
