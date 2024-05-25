import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
export const DetalleMovie = ({
  fondo,
  title,
  imagen,
  imagen2,
  overview,
  pais,
  data,
  genero,
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

  return (
    <>
      <div style={{ background: "white" }} className="mt-4 ">
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
              <Nav
                name={"Share"}
                item1={"Share Link"}
                item2={"Facebook"}
                item3={"Tweet"}
                item4={"YouTube"}
              />
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
              marginTop: 5,
              backgroundSize: "cover",
              backgroundPosition: "center",
              background: `linear-gradient(to right  ,#000,transparent),url(${imagen})`,
            }}
          >
            <span className="fondo"></span>
            <div
              style={{
                zIndex: 20,
                position: "absolute",
                top: 100,
                left: 10,
              }}
              className=""
            >
              <div className="d-flex row justify-content-center align-items-start gap-5">
                <img
                  className="col-lg-4 col-md-5 rounded col-sm-8  "
                  style={{
                    display: "block",
                    borderRadius: 9,

                    width: 370,
                    height: 430,
                  }}
                  src={imagen2}
                  alt="no se encuentra"
                ></img>
                <div className="col-lg-7  col-md-5 col-xs-12 col-12 ">
                  <h1 className="text-white title display-5">{title}</h1>
                  <div className="d-flex flex'wrap text gap-2 ">
                    <p></p>
                    <p>{data}</p>
                    <p>({pais}) -</p>
                    {genr.map((e) => (
                      <p>{e},</p>
                    ))}
                    <p> - </p>
                  </div>
                  <h2 className="text-white">Overview</h2>
                  <p className="h4 text-white">{overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
