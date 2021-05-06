import {lazy, Suspense} from 'react';
import { Spinner } from 'react-bootstrap';

const CompletedGames = lazy(() => import('./CompletedGames'));

export function CompletedGamesRoute() {
  return (
    <Suspense fallback={<Spinner animation="border"/>}>
      <CompletedGames />
    </Suspense>
  );
}
