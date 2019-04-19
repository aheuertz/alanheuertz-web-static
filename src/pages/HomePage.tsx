import React, { useEffect, useState } from "react";
import WorkInProgress from "../components/WorkInProgress";
import Container from "reactstrap/lib/Container";
import Card from "reactstrap/lib/Card";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import { BoardGamesCard } from "../components/board-games/BoardGamesCard";
import { ArchiveCard } from "../components/archives/ArchiveCard";
import { isNullOrUndefined } from "util";
import { getThings } from "../services/things/ThingsService";
import { FeedsCard } from "../components/feeds/FeedsCard";
import "./home-page.scss";
import { TweetsCard } from "../components/tweets/TweetsCard";
import CardColumns from "reactstrap/lib/CardColumns";

const HomePage = () => {
  const [things, setThings] = useState<any[] | null>(null);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (isNullOrUndefined(accessToken)) return;

    console.log("HomePage", "Getting things!!");
    getThings()
      .then(response => {
        console.log("HomePage", "Succeeded getting things", response);
      })
      .catch(error => {
        console.error("HomePage", "Failed to get things", error);
      });
  });

  return (
    <>
      <Container fluid className="mt-3">
        <CardColumns className="responsive">
          <FeedsCard />
          <TweetsCard />
          <BoardGamesCard linkToBoardGamesPage={true} />
          <ArchiveCard />
          <Card>
            <CardHeader>Programming</CardHeader>
            <CardBody>
              <WorkInProgress />
            </CardBody>
          </Card>
        </CardColumns>
      </Container>
    </>
  );
};

export default HomePage;
