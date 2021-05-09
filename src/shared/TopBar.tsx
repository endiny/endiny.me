import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Router'

import {CurrentUser} from '../shared/auth/CurrentUser';

export function TopBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={ROUTES.HOME}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={ROUTES.COMPLETED_GAMES}>
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
