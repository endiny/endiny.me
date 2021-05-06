import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {CurrentUser} from '../shared/auth/CurrentUser';

export function TopBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="games">
            Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="mr-auto">
        <CurrentUser />
      </Nav>
    </Navbar>
  );
}
