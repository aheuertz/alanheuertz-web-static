import * as React from "react";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import Badge from "reactstrap/lib/Badge";
import Table from "reactstrap/lib/Table";

interface Record {
  name: string;
  location: string;
  tags: string[]
}

export const ArchiveCollection = () => {
  const records: Record[] = [
    {name: 'Using the Effect Hook - React', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
    {name: 'First', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
    {name: 'Second', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
    {name: 'Third', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
    {name: 'Fourth', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
    {name: 'Fifth', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
  ];

  return (
    <Table>
      <tbody>
        {records.map((record: Record, index: number) => (
          <tr key={index}>
            <td><a href={record.location}>{record.name}</a></td>
            <td>{record.tags.map((tag: string, tagIndex: number) => (<Badge key={tagIndex}>{tag}</Badge>))}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
