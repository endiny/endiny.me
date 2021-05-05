import {Spinner} from 'react-bootstrap';

export function AuthenticateRoute() {
  return (
    <div className="spinner-wrapper">
      <Spinner animation="grow" />
    </div>
  );
}
