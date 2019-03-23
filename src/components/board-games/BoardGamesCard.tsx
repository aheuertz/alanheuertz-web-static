import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import { BoardGamesCollection } from "./BoardGamesCollection";
import { Link } from "react-router-dom";

export const BoardGamesCard = (props: {linkToBoardGamesPage?: boolean}) => {
  return (
    <Card>
      <CardHeader>My Board Games</CardHeader>
      <CardBody>
        <BoardGamesCollection />
        {props.linkToBoardGamesPage && <Link to="/board-games/">More Board Games</Link>}
      </CardBody>
    </Card>
  );
}
