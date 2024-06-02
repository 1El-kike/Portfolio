import { Article } from "./Estilos_css";
import { CardGroup, Card } from "react-bootstrap";

//import { Time } from "../../../element/Time";

export const Articleblog = ({ title, texto, image }) => {
  const [title1, title2] = title,
    [texto1, texto2] = texto,
    [i1, i2] = image;

  return (
    <Article className="">
      <CardGroup style={{ width: "100%" }}>
        <Card bg="lingh" bsPrefix="card">
          <Card.Img
            variant="top"
            style={{ width: "100%", height: "250px " }}
            src={i1}
          />
          <Card.Body>
            <Card.Title>{title1}</Card.Title>
            <Card.Text>{texto1}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 year old</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup style={{ width: "100%" }}>
        <Card bg="lingh" bsPrefix="card">
          <Card.Img
            variant="top"
            style={{ width: "100%", height: "250px" }}
            src={i2}
          />
          <Card.Body>
            <Card.Title>{title2}</Card.Title>
            <Card.Text>{texto2}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 year old</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Article>
  );
};
