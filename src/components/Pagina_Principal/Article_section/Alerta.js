import React from "react";
import { Alert } from "react-bootstrap";

export const Alerta = ({ alerHeader, parrafoHeader, parragofooter, image }) => {
  return (
    <Alert
      className="text-black  mt-4 mb-4"
      style={{
        width: "100%",
        height: "auto",
        backgroundImage: ` url(${image})`,
        backgroundSize: "cover",
        textAlign: "justify",
        border: "1px solid #ccc",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        paddingRight: "80px",
      }}
      variant="success"
    >
      <Alert.Heading>{alerHeader}</Alert.Heading>
      <p>{parrafoHeader} </p>
      <hr />
      <p className="mb-0">{parragofooter}</p>
    </Alert>
  );
};
