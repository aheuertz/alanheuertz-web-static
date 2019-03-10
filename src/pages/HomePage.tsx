import React from "react";
import WorkInProgress from "../components/WorkInProgress";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Card from "reactstrap/lib/Card";
import Col from "reactstrap/lib/Col";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import { BoardGamesCard } from "../components/board-games/BoardGamesCard";

const HomePage = () => {
  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col>
            <Card>
              <CardHeader>Programming</CardHeader>
              <CardBody>
                <WorkInProgress />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <BoardGamesCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage;
