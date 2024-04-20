import React from "react";
import { Card } from "react-bootstrap";

export const CardGroup = ({ logo, title, text }) => {
  return (
    <Card bg="lingh" bsPrefix="card">
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 1 year old</small>
      </Card.Footer>
    </Card>
  );
};
