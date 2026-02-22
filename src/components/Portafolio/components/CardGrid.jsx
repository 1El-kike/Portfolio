import React from "react";
import { Card, CardGroup } from "react-bootstrap";

// entries should be passed from parent component for better flexibility
// expect an array of [imageSrc, title, description]

export const CardGrid = ({ entries = [], width }) => (
  <>
    {entries.map((item, i) => (
      <CardGroup
        key={i}
        style={{ paddingRight: width > 350 ? 20 : 0 }}
        className="col-lg-4 col-md-6 col-sm-12 pb-4"
      >
        <Card bg="dark">
          <Card.Img variant="top" src={item[0]} />
          <Card.Body className="top">
            <Card.Title className="text-light">{item[1]}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{item[2]}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    ))}
  </>
);
