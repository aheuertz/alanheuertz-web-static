import * as React from "react";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import { ArchiveCollection } from "./ArchiveCollection";

export const ArchiveCard = () => {
  return (
    <Card>
      <CardHeader>Archives</CardHeader>
      <CardBody style={{minHeight: "300px"}}>
        <ArchiveCollection />
      </CardBody>
    </Card>
  );
}
