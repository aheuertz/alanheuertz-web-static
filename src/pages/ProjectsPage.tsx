import React from "react";
import WorkInProgress from "../components/WorkInProgress";
import WorkInProgressImage from "../components/work-in-progress.svg";
import ReduxSandboxImage from "../images/redux-sandbox.png";
import { ProjectCard } from "../components/project-card/ProjectCard";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

const ProjectsPage = () => {
  return (
    <>
      <Container style={{marginTop: "20px"}}>
        <Row>
          <Col sm="4">
            <ProjectCard
              name="Redux Sandbox"
              image={ReduxSandboxImage}
              githubRepo="aheuertz/redux-sandbox"
              demoLocation="http://hueydev-redux-sandbox-static.s3-website-us-east-1.amazonaws.com/" />
          </Col>
          <Col sm="4">
            <ProjectCard
              name="Microplat"
              image={WorkInProgressImage}
              githubRepo="aheuertz/microplat" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectsPage;
