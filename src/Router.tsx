import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {CompletedGamesRoute} from './completed-games/Route';
import {Home} from './home/Home';
import {AuthenticateRoute} from './auth/AuthenticateRoute';
import { Container } from 'react-bootstrap';

export enum ROUTES {
  HOME = '/',
  COMPLETED_GAMES = '/games',
  AUTH = '/auth',
}

export function Routes() {
  return (
    <Container className="route-wrapper">
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route
          exact
          path={ROUTES.COMPLETED_GAMES}
          component={CompletedGamesRoute}
        />
        <Route exact path={ROUTES.AUTH} component={AuthenticateRoute} />
      </Switch>
    </Container>
  );
}
