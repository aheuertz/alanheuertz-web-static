import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import { BoardGamesTable } from "./BoardGamesTable";
import CardHeader from "reactstrap/lib/CardHeader";

export const BoardGamesCard = () => {
  return (
    <Card>
      <CardHeader>My Board Games</CardHeader>
      <CardBody>
        <div className="d-none d-md-block">
          <BoardGamesTable />
        </div>
        <div className="d-md-none">
          Board game collection is currently unavailable on small screens.
        </div>
      </CardBody>
    </Card>
  );
}
