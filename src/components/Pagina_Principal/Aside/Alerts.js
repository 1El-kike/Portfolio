import { Alert } from "react-bootstrap";

export const Alerts = () => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Web</Alert.Heading>
        <p>
          Mostrar un comportamiento de comunicación efectiva y colaborativo
          puede inspirar a los demás miembros del equipo a adoptar similares
          prácticas. Esto implica ser claro, conciso y abierto en las
          comunicaciones, así como fomentar un ambiente de respeto y apertura
          para las ideas y opiniones de todos{" "}
        </p>
        <hr />
        <p className="mb-0">
          La comunicación y el trabajo en equipo son habilidades que se pueden
          mejorar con el tiempo y la práctica. Mantenerse actualizado sobre las
          mejores prácticas y estar dispuesto a adaptarse a nuevas situaciones y
          desafíos puede ayudar a mantener un alto nivel de comunicación y
          colaboración dentro del equipo
        </p>
      </Alert>
    </>
  );
};
