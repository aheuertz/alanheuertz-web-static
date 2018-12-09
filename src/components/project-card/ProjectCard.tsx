import React from "react";
import "./project-card.scss";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardImg from "reactstrap/lib/CardImg";
import CardTitle from "reactstrap/lib/CardTitle";
import Badge from "reactstrap/lib/Badge";

export interface ProjectCardProps {
  name: string;
  image: string;
  demoLocation?: string;
  githubRepo?: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt={props.name} />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          {props.demoLocation && <Badge href={props.demoLocation} target="_blank" color="primary">Demo</Badge>}
          {props.githubRepo && <Badge href={`https://github.com/${props.githubRepo}`} target="_blank" color="secondary">Repo</Badge>}
        </CardBody>
      </Card>
    </div>
  )
};
