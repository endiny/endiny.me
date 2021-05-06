import {lazy, Suspense} from 'react';
import {Spinner} from '../shared/Spinner';

const CompletedGames = lazy(() => import('./CompletedGames'));

export function CompletedGamesRoute() {
  return (
    <Suspense fallback={<Spinner />}>
      <CompletedGames />
    </Suspense>
  );
}
