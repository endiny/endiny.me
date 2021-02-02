import { lazy, Suspense } from "react";
import { Spinner } from "../utils/Spinner";

const CompletedGames = lazy(() => import("./CompletedGames"));

export function CompletedGamesRoute() {
  return (
    <Suspense fallback={<Spinner />}>
      <CompletedGames />
    </Suspense>
  );
}
