import React, { useEffect, useState } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { Progress, ProgressValue } from "./Api";

import heartEyes from "@iconify-icons/twemoji/smiling-face-with-heart-eyes";
import grinningFace from "@iconify-icons/twemoji/grinning-face";
import angryFace from "@iconify-icons/twemoji/angry-face";
import { Icon } from "@iconify/react";
export const DetalleMovie = ({
  estado,
  fondo,
  title,
  imagen,
  imagen2,
  overview,
  pais,
  tagline,
  data,
  idiomaOriginal,
  time,
  credit,
  genero,
  puntuacion,
  actores,
  presupuesto,
  porsentaje,
  ingreso,
}) => {
  const Nav = ({ name, item1, item2, item3, item4 }) => {
    return (
      <NavDropdown
        title={<span className="dropdown-title">{name}</span>}
        id="nav-dropdown"
        menuVariant=""
        className="nav nav-tabs custom-dropdown"
      >
        <NavDropdown.Item href="">
          <Link to={"#"} className="dropdown-item ">
            {item1}
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
          <Link to={"/#"} className="dropdown-item">
            {item2}
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
          <Link to={"/#"} className="dropdown-item">
            {item3}
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item href="">
          <Link to={"/#"} className="dropdown-item">
            {item4}
          </Link>
        </NavDropdown.Item>
      </NavDropdown>
    );
  };

  const genr = genero.map((e) => e.name);

  const [ancho, setancho] = useState(window.innerWidth);

  window.addEventListener("resize", function () {
    var ancho = this.window.innerWidth;
    setancho(ancho);
  });

  const convertime = (time) => {
    const hours = Math.floor(time / 60);

    const remaingMinutes = time % 60;

    return `${hours}h  ${remaingMinutes}m`;
  };

  const convertirdata = (data, n) => {
    const datanew = new Date(data);

    const day = String(datanew.getDate()).padEnd(2, "0");
    const month = String(datanew.getMonth() + 1).padEnd(2, "0");
    const year = datanew.getFullYear();
    if (n === 1) {
      return `${day}/${month}/${year}`;
    }
    if (n === 2) {
      return `(${year})`;
    }
  };

  const Carita = () => {
    return (
      <>
        <div className="d-flex ms-4">
          <Icon icon={grinningFace} className="icons" />
          <Icon icon={angryFace} className="icons" />
          <Icon icon={heartEyes} className="icons" />
        </div>
      </>
    );
  };

  const [info, setinfo] = useState([]);
  const [writer, setwriter] = useState([]);
  const [product, setproduct] = useState([]);

  function obtenerNombreDirector(credits) {
    // Iteramos sobre el array 'crew' buscando el director
    const director = credits.crew.find((c) => c.job === "Director");
    const writer = credits.crew.find((c) => c.job === "Writer");
    const product = credits.crew.find((c) => c.job === "Producer");

    if (product) {
      setproduct([product.name, product.job]);
    } else {
      setproduct([]);
    }
    if (writer) {
      setwriter([writer.name, writer.job]);
    } else {
      setancho([]);
    }
    if (director) {
      setinfo([director.name, director.job]);
    } else {
      setancho([]);
    }
  }

  useEffect(() => {
    obtenerNombreDirector(credit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div style={{ background: "white" }} className="mt-4">
        <span className="colorfondo"></span>
        <div
          style={{ position: "relative", zIndex: 10 }}
          className="container  p-2"
        >
          <div className="d-flex justify-content-center ">
            <ul className="nav nav-tabs">
              <Nav
                name={"Overview"}
                item1={"Main"}
                item2={"Alternative Title"}
                item3={"Cast & Crew"}
                item4={"Release Dates"}
              />
              <Nav
                name={"Media"}
                item1={"Backdrops"}
                item2={"Logos"}
                item3={"Posters"}
                item4={"Videos"}
              />
              <Nav
                name={"Fandom"}
                item1={"Discussions"}
                item2={"General"}
                item3={"Reviews"}
                item4={"Content"}
              />{" "}
              {ancho > 470 ? (
                <Nav
                  name={"Share"}
                  item1={"Share Link"}
                  item2={"Facebook"}
                  item3={"Tweet"}
                  item4={"YouTube"}
                />
              ) : (
                ""
              )}
            </ul>
          </div>
          <div
            className="h-100 col-12"
            style={{
              zIndex: 10,
              overflow: "hidden",
              marginLeft: 132,
              maxHeight: 600,
              opacity: 0.8,
              width: "98%",
              height: ancho > 1199 ? "auto" : 1200,
              marginTop: 4,
              backgroundSize: "cover",
              backgroundPosition: "center",
              background: `linear-gradient(to right  ,#000,transparent),url(${imagen})`,
            }}
          >
            <span className="fondo2"></span>
            <div
              style={{
                zIndex: 20,
                position: "absolute",
                top: 100,
                left: 10,
              }}
              className=""
            >
              <div className="d-flex row justify-content-center flex-wrap align-items-start gap-5">
                <img
                  className="col-lg-4 col-md-3 col-sm-8  "
                  style={{
                    display: "block",
                    width: "26%",
                    minHeight: 200,
                    minWidth: 150,

                    height: "100%",
                    borderRadius: 9,
                  }}
                  src={imagen2}
                  alt="no se encuentra"
                ></img>
                <div className="col-lg-7  flex-wrap col-md-10 col-xs-12 col-12 ">
                  <div className="lh-lg col-12 ">
                    <h1 className="text-white title display-6">
                      {`${title} ${convertirdata(data, 2)}`}
                    </h1>

                    <div className="d-flex flex-wrap textsecondary gap-2 ">
                      <p></p>
                      <p>{convertirdata(data, 1)}</p>
                      <p>{`( ${pais} )`} </p>
                      {genr.map((e) => (
                        <p>{`${e} `}</p>
                      ))}
                      <p> {convertime(time)} </p>
                    </div>
                    <div className="d-flex flex-wrap align-items-center">
                      <Progress number={porsentaje} className="mt-3 mb-3">
                        <ProgressValue
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                        >
                          {porsentaje + "%"}
                        </ProgressValue>
                      </Progress>
                      <h1 className="text-white lh-1  ms-2 textthree">
                        Puntuación <br />
                        de
                        <br /> usuarios
                      </h1>
                      <Carita />

                      <Button
                        className="ms-5 rounded-pill"
                        variant="primary"
                        size={ancho > 1200 ? "lg" : "md"}
                      >
                        ¿ Cual es tu vibra ?
                        <i className="fa fa-info-circle ms-2"></i>
                      </Button>
                    </div>
                    <div className="d-flex h gap-3">
                      <Button className="rounded-pill">
                        <i className="fa fa-bars "></i>
                      </Button>
                      <Button className="rounded-pill ">
                        <i className="fa fa-heart "></i>
                      </Button>
                      <Button className="rounded-pill">
                        <i className="fa fa-flag"></i>
                      </Button>
                      <buton
                        className="btn2 rounded-pill text-white"
                        variant="outline-secondary"
                      >
                        Reproducir trailer
                        <i className="fa fa-step-forward ps-2"></i>
                      </buton>
                    </div>
                  </div>
                  <h2 className="text-secondary secondary">{tagline}</h2>
                  <h2 className="text-white">Overview</h2>
                  <p className="h6 text-white">{overview}</p>
                  <div className="w-100 d-flex flex-wrap justify-content-around">
                    <div className="mt-3">
                      <p className="text-white mb-0 h4">{info[0]}</p>
                      <h6 className="text-secondary">{info[1]}</h6>
                    </div>
                    <div className="mt-3">
                      <p className="text-white mb-0 h4">{writer[0]}</p>
                      <h6 className="text-secondary">{writer[1]}</h6>
                    </div>

                    <div className="mt-3">
                      <p className="text-white mb-0 h4">{product[0]}</p>
                      <h6 className="text-secondary">{product[1]}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-flex">
          <div
            className="d-flex col-lg-9 pt-3 gap-3 pb-3"
            style={{
              overflow: "auto",
              position: "relative",
              height: 380,
              marginLeft: 0,
            }}
          >
            <div
              className="positiont-absolute "
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(
                    to right,
                    transparent 95%,
                    #fff 
                  )`,
                zIndex: 100,
              }}
            ></div>
            {actores?.map((e) => {
              return (
                <>
                  <div
                    className="rounded  border"
                    style={{
                      boxShadow: "3px 3px 9px #7777",
                      maxHeight: 350,
                    }}
                  >
                    <div
                      style={{
                        background: `url(https://image.tmdb.org/t/p/w500${e.profile_path})`,
                        minWidth: 160,
                        opacity: 0.9,
                        height: 190,
                        backgroundSize: "cover",
                        backgroundPosition: "",
                      }}
                      className="rounded "
                    ></div>
                    <div className="d-flex flex-column justify-content-end align-items-start ">
                      <h4 className="m-2">
                        <b>{e.name} </b>{" "}
                      </h4>
                      <p className="ms-2 h5 text-secondary">{e.character}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div
            className="col-lg-3 d-flex flex-column p-5 "
            style={{ overflow: "visible" }}
          >
            <div className="">
              <p>
                <b>Estado</b>
              </p>
              <p>{estado}</p>
            </div>
            <div className="">
              <p>
                <b>Idioma original</b>
              </p>
              <p>{idiomaOriginal}</p>
            </div>
            <div className="">
              <p>
                <b>Presupuesto</b>
              </p>
              <p>{presupuesto}</p>
            </div>
            <div className="">
              <p>
                <b>Ingresos</b>
              </p>
              <p>{ingreso}</p>
            </div>
            <hr />
            <div className="">
              <p>
                <b>Puntuación del contenido</b>
              </p>
              <div className=" m-0">
                <p className=" ps-2 ">
                  {puntuacion > 500
                    ? "80"
                    : puntuacion > 400
                    ? "70"
                    : puntuacion > 300
                    ? "60"
                    : "50"}
                </p>
                <p className=" ps-2 pb-4 pt-0 mt-0  ">
                  {puntuacion > 500
                    ? "¡Si! ¡Buena Pinta!"
                    : puntuacion > 400
                    ? "¡No! ¡Esta mal!"
                    : puntuacion > 300
                    ? "¡Bien!"
                    : "¡Mas! ¡menos!"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
