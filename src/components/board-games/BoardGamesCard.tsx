import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import { BoardGamesCollection } from "./BoardGamesCollection";

export const BoardGamesCard = () => {
  return (
    <Card>
      <CardHeader>My Board Games</CardHeader>
      <CardBody>
        <BoardGamesCollection />
      </CardBody>
    </Card>
  );
}
