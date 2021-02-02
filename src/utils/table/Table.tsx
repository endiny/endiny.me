import React from "react";
import { TableRow } from "./TableRow";

interface P<T> {
  rows: T[];
  columns: string[];
	templates: Array<(row: T) => React.ReactChild>;
	keyExtractor: (row: T) => string;
}

export function Table<V>({ rows, columns, templates, keyExtractor }: P<V>): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
					<tr key={keyExtractor(row)}>
          	<TableRow row={row} templates={templates} />
					</tr>
        ))}
      </tbody>
    </table>
  );
}
