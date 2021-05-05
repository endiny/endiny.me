import { Table } from "../shared/table/Table";
import { CompletedGame } from "./completed-games.store";

const GAME_TABLE_COLUMNS = ["ID", "Name", "Score"];

const GAME_ROW_TEMPLATE = [
  ({ id }: CompletedGame) => id,
  ({ name }: CompletedGame) => name,
  ({ score }: CompletedGame) => score,
];

const ROW_EXTRACTOR = ({ id }: CompletedGame) => id;

interface P {
  games: CompletedGame[];
}

export function GamesTable({ games }: P) {
  return (
    <Table
      rows={games}
      columns={GAME_TABLE_COLUMNS}
      templates={GAME_ROW_TEMPLATE}
      keyExtractor={ROW_EXTRACTOR}
    />
  );
}
