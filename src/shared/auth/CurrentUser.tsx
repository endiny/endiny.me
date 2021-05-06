import {observer} from 'mobx-react-lite';
import {Nav, Navbar, Spinner} from 'react-bootstrap';
import {useStore} from '../../stores';
import {NavDropdown, Image} from 'react-bootstrap';
import './CurrentUser.css';

function CurrentUserComponent(): JSX.Element {
  const {authStore} = useStore();

  if (authStore.isLoading) {
    return <Spinner animation="border" />;
  } else if (authStore.user) {
    return (
      <div className="user-container">
        <Image
          src={authStore.user.profile_image_url}
          roundedCircle
          className="logo"
        />
        <span className="space-div" />
        <NavDropdown
          alignRight
          flip
          title={authStore.user.display_name}
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item
            className="dropdown-item"
            onClick={() => authStore.logout()}
          >
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    );
  } else {
    return <Nav.Link onClick={() => authStore.authenticate()}>Login</Nav.Link>;
  }
}

export const CurrentUser = observer(CurrentUserComponent);
