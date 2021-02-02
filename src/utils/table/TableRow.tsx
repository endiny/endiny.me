import React from "react";

interface P<T> {
  row: T;
  templates: Array<(row: T) => React.ReactChild>;
}

export function TableRow<V>({ row, templates }: P<V>): JSX.Element {
  return (
    <>
      {templates.map((template, index) => (
        <td key={index}>{template(row)}</td>
      ))}
    </>
  );
}
