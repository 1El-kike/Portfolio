import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faCommentSms,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
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
}) => {
  const [contador, setcontador] = useState(0);

  const contar = () => {
    setcontador(contador + 1);
  };

  const [comment, setcomment] = useState(0);
  const comentario = () => {
    setcomment(comment + 1);
    console.log("contador 1");
  };

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
            <FontAwesomeIcon
              style={icono.blue}
              icon={faCommentSms}
              onClick={comentario}
            />
            <span>{comment}</span>
          </Bottom>
          <Bottom role="button">
            <FontAwesomeIcon
              style={{ fontSize: "29px", color: "red" }}
              icon={faHeart}
              onClick={contar}
            />
            {contador}
          </Bottom>
          <Bottom role="button">
            <FontAwesomeIcon style={icono.red} icon={faPlay} />
            <span style={icono.span}>Player</span>
          </Bottom>
        </DivButton>
      </DivElemPlayer>
    </>
  );
};
