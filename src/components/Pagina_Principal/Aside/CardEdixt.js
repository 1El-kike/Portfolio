import React from "react";
import { Card, Nav } from "react-bootstrap";
import { CardEdixt } from "./estilosAside";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export const CardEdixts = ({ link, adress, title, texto }) => {
  const [l1, l2, l3] = link;
  const [a1, a2, a3] = adress;

  return (
    <>
      <CardEdixt bg="" text="dark">
        <Card.Header>
          <Nav variant="pills /* tabs */" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href={a1}>{l1}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={a2}>{l2}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={a3}>{l3}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{texto}</Card.Text>
        </Card.Body>
      </CardEdixt>
    </>
  );
};
