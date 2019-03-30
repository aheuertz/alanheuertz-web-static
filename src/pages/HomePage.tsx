import React, { useEffect, useState } from "react";
import WorkInProgress from "../components/WorkInProgress";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Card from "reactstrap/lib/Card";
import Col from "reactstrap/lib/Col";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import { BoardGamesCard } from "../components/board-games/BoardGamesCard";
import { ArchiveCard } from "../components/archives/ArchiveCard";
import { isNullOrUndefined } from "util";
import { getThings } from "../services/things/ThingsService";
import { FeedsCard } from "../components/feeds/FeedsCard";

const HomePage = () => {
  const [things, setThings] = useState<any[]|null>(null);

  useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (isNullOrUndefined(accessToken)) return;

    console.log('HomePage', 'Getting things!!');
    getThings()
      .then((response) => {
        console.log('HomePage', 'Succeeded getting things', response);
      })
      .catch((error) => {
        console.error('HomePage', 'Failed to get things', error);
      });
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col xl ="6" className="mt-3">
            <FeedsCard />
          </Col>
          <Col xl="6" className='mt-3'>
            <ArchiveCard />
          </Col>
        </Row>
        <Row>
          <Col xl="6" className='mt-3'>
            <BoardGamesCard linkToBoardGamesPage={true} />
          </Col>
          <Col xl="6" className='mt-3'>
            <Card>
              <CardHeader>Programming</CardHeader>
              <CardBody>
                <WorkInProgress />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage;
