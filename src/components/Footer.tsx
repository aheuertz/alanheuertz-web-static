import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';

export const Footer = () => {
  const buildHash = process.env.REACT_APP_BUILD_HASH;
  const buildTimestamp = process.env.REACT_APP_BUILD_TIMESTAMP;
  return (
    <Container>
      <hr />
      <Row className="justify-content-center">
        © 2019 Alan Heuertz
        <a href="https://github.com/aheuertz" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} color="gray" className="ml-2" /></a>
        <a href="https://www.linkedin.com/in/alan-heuertz-aa000713/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} color="gray" className="ml-1" /></a>
      </Row>
      <Row className="text-muted justify-content-center"><small>Build {buildHash}_{buildTimestamp}</small></Row>
    </Container>
  )
};
