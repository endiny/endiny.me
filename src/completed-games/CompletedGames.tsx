import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
import {useStore} from '../stores';
import {GamesTable} from './GamesTable';

const CompletedGames = observer(function CompletedGames(): JSX.Element {
  const {completedGamesStore} = useStore();

  useEffect(() => {
    (async () => {
      await completedGamesStore.loadGamesList();
    })();
  }, [completedGamesStore]);

  return (
    <div>
      <div>Games List</div>
      {completedGamesStore.isFetching ? (
        <Spinner animation="border"/>
      ) : (
        <GamesTable games={completedGamesStore.gamesList} />
      )}
    </div>
  );
});

export default CompletedGames;
