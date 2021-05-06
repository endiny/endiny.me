import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {useStore} from '../stores';
import {Spinner} from '../shared/Spinner';
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
        <Spinner />
      ) : (
        <GamesTable games={completedGamesStore.gamesList} />
      )}
    </div>
  );
});

export default CompletedGames;
