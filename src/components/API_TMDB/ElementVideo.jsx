import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  P,
  DivElemPlayer,
  Titulo,
  DivButton,
  Bottom,
  icono,
  Progress,
  ProgressValue,
} from "./Api";

export const ElementVideo = ({
  tituloPlayer,
  id,
  textPlayer,
  imagen,
  porsentaje,
  data,
}) => {
  const start = (item) => {
    console.log(item);
    if (item > 90) {
      return "5";
    }
    if (item > 70) {
      return "4";
    }
    if (item > 50) {
      return "3";
    }

    return "2";
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    // Configura las opciones para obtener el formato deseado
    const options = { year: "numeric", month: "short", day: "2-digit" };

    // Convierte la fecha al formato deseado
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
  }

  return (
    <>
      <DivElemPlayer>
        <Link
          className="position-relative"
          to={`/about/${id}`}
          style={{
            display: "grid",
            gridColumn: "span 3",
            margin: "auto",
            borderRadius: "6px",
          }}
        >
          <img
            style={{ borderRadius: 8, margin: "auto" }}
            src={imagen}
            alt="no se encuentra"
            width="99%"
            height="400px"
          ></img>
          <Progress
            number={porsentaje}
            className={" position-absolute"}
            style={{ right: -39, bottom: -30 }}
          >
            <ProgressValue
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
            >
              {porsentaje + "%"}
            </ProgressValue>
          </Progress>
        </Link>
        <Titulo>{tituloPlayer}</Titulo>

        {textPlayer === "" ? <P>{textPlayer}</P> : <></>}
        <DivButton>
          <Bottom role="button">
            <FontAwesomeIcon icon={faStar} size={52} color="#D2D531" />
            <span style={icono.blue}>{start(porsentaje)}</span>
          </Bottom>
          <Bottom role="button"></Bottom>
          <Bottom role="button">
            <span style={icono.red}>{formatDate(data)}</span>
          </Bottom>
        </DivButton>
      </DivElemPlayer>
    </>
  );
};
