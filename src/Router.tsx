import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CompletedGamesRoute} from './completed-games/Route';
import {Home} from './home/Home';
import {AuthenticateRoute} from './auth/AuthenticateRoute';

enum ROUTES {
  HOME = '/',
  COMPLETED_GAMES = '/games',
  AUTH = '/auth',
}

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route
          exact
          path={ROUTES.COMPLETED_GAMES}
          component={CompletedGamesRoute}
        />
        <Route exact path={ROUTES.AUTH} component={AuthenticateRoute} />
      </Switch>
    </BrowserRouter>
  );
}
