import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CompletedGamesRoute } from './completed-games/Route';
import {Home} from "./home/Home";

enum ROUTES {
  HOME = "/",
  COMPLETED_GAMES = "/games",
}

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={ROUTES.HOME}
          component={Home}
        />
        <Route exact path={ROUTES.COMPLETED_GAMES} component={CompletedGamesRoute} />
      </Switch>
    </BrowserRouter>
  );
}
