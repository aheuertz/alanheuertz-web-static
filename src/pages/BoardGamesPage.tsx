import React from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import { BoardGamesCard } from "../components/board-games/BoardGamesCard";
import Col from "reactstrap/lib/Col";

export const BoardGamesPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="mt-3">
            <BoardGamesCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}
