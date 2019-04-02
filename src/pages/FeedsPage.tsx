import React from "react";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import { FeedsCard } from "../components/feeds/FeedsCard";

export const FeedsPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="mt-3">
            <FeedsCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}
