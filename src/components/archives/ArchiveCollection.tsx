import * as React from "react";
import Badge from "reactstrap/lib/Badge";
import Table from "reactstrap/lib/Table";
import { isNullOrUndefined } from "util";
import Spinner from "reactstrap/lib/Spinner";

interface Record {
  name: string;
  location: string;
  tags: string[]
}

export const ArchiveCollection = () => {
  // const records: Record[] = [
  //   {name: 'Using the Effect Hook - React', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
  //   {name: 'First', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
  //   {name: 'Second', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
  //   {name: 'Third', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
  //   {name: 'Fourth', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
  //   {name: 'Fifth', location: 'https://reactjs.org/docs/hooks-effect.html', tags: ['react', 'programming']},
  // ];

  const [records, setRecords] = React.useState<Record[]|undefined>(undefined);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setRecords([]);
      setLoading(false);
    }, 2000);
  }, [])

  return (
    <>
      {loading && <Spinner />}
      <Table size="sm">
        <tbody>
          {!isNullOrUndefined(records) && (
            <>
              {records.length === 0 && <div>The archives are currently empty</div>}
              {records.map((record: Record, index: number) => (
                <tr key={index}>
                  <td><a href={record.location}>{record.name}</a></td>
                  <td>{record.tags.map((tag: string, tagIndex: number) => (<Badge key={tagIndex}>{tag}</Badge>))}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </Table>
    </>
  )
}
