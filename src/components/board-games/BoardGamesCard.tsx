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
        <BoardGamesTable />
      </CardBody>
    </Card>
  );
}
