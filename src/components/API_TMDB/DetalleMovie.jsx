import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
export const DetalleMovie = ({ fondo, title, imagen, imagen2, overview }) => {
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

  return (
    <>
      <div style={{ background: "white" }} className="mt-4 ">
        <span className="colorfondo"></span>
        <div style={{ position: "relative" }} className="container p-2">
          <div className="d-flex justify-content-center">
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
            style={{
              overflow: "hidden",
              height: 700,
              width: "100%",
              marginLeft: 108,
              zIndex: 20,
            }}
          >
            <img
              style={{
                display: "block",
                opacity: 0.8,
                marginTop: 5,
                marginLeft: "auto",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `linear-gradient(to right, transparent, #000)`, // Aplica el gradiente
                backgroundBlendMode: "multiply", // Combina el gradiente con la imagen
              }}
              src={imagen}
              alt="no se encuentra"
              width="1280px"
              height="600px"
            ></img>
            <div
              style={{ zIndex: 20, position: "absolute", top: 100, left: 10 }}
              className=""
            >
              <div className="d-flex gap-5">
                <img
                  style={{
                    display: "block",
                    borderRadius: 8,
                    marginTop: 5,
                    marginLeft: "auto",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `linear-gradient(to right, transparent, #000)`, // Aplica el gradiente
                    backgroundBlendMode: "multiply", // Combina el gradiente con la imagen
                  }}
                  src={imagen2}
                  alt="no se encuentra"
                  width="400px"
                  height="500px"
                ></img>
                <div>
                  <h1 className="text-white display-5">{title}</h1>
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
