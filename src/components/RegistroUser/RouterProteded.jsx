/* eslint-disable jsx-a11y/scope */
import React, { useEffect, useState } from "react";
import { Menu } from "../Menu/Menu";
import { Footer } from "../footer";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export const RouterProteded = () => {
  // eslint-disable-next-line no-unused-vars
  const [todus, setTodus] = useState([]);
  const [user, setuser] = useState([]);
  const [photos, setphotos] = useState([]);
  const [show, setShow] = useState(false);
  const [ids, setid] = useState(0);

  const handleClose = () => {
    setShow(false);
    setid(0);
  };

  const handleShow = (id) => {
    setShow(true);
    setid(id);
  };

  const Getdatos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodus(json))
      .catch((err) => console.log(err));
  };
  const GetUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setuser(json))
      .catch((err) => console.log(err));
  };
  const Getphotos = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setphotos(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Getdatos();
    GetUser();
    Getphotos();
  }, []);

  const cambiarComplit = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    //e.nativeEvent.stopImmediatePropagation();
    setTodus((todus) => {
      return todus.map((item) => {
        if (item?.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  const countTodusByUser = todus.reduce((acc, todo) => {
    acc[todo.userId] = (acc[todo.userId] || 0) + 1;
    return acc;
  }, {});

  const Contenido = () => {
    console.log(countTodusByUser);
    return (
      <>
        <div className="col-md-3 col-xs-1 col-1 col-lg-4 mb-5 mt-4" style={{}}>
          <div className="table-responsive" style={{ borderRadius: 8 }}>
            <table
              style={{ borderRadius: 8 }}
              className="table table-striped table-hover table-dark mt-3 table-borderless table-primary align-middle"
            >
              <>
                <thead
                  className="table-dark"
                  style={{
                    borderRadius: 8,
                  }}
                >
                  <tr>
                    <th>
                      Nombre <i className="fas fa-user ms-2"></i>
                    </th>
                    <th>
                      Email <i className="fas fa-envelope-square ms-2"></i>
                    </th>
                    <th style={{ width: 90 }}>
                      Total <i className="fas fa-fax ms-2"></i>
                    </th>
                  </tr>
                </thead>
                {user?.map((elem) => {
                  return (
                    <tbody className="table-group-divider">
                      <tr className="">
                        <td scope="row">{elem.name}</td>
                        <td scope="row">{elem.email}</td>
                        <td scope="row">
                          {countTodusByUser ? countTodusByUser[elem.id] : null}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
                <tfoot></tfoot>
              </>
            </table>
          </div>
        </div>

        <div
          style={{ height: "auto" }}
          className="container justify-content-center align-items-center col-md-9 col-xs-11 col-11 col-lg-7 mb-5 mt-4"
        >
          {/*  {JSON.stringify(user, null, 5)} */}

          {todus?.map(({ userId, id, title, completed }) => {
            return (
              <div key={id}>
                <div class="list-group d-flex flex-columns mt-3">
                  <Link
                    onClick={() => handleShow(userId)}
                    to="#"
                    style={{
                      backgroundColor: "#423D3D",
                      borderColor: "#065064",
                    }}
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-start active"
                    aria-current="true"
                  >
                    <div className="d-flex gap-3">
                      <img
                        style={{ width: "205px", margin: 5, height: "205px" }}
                        src={
                          photos && photos[userId]
                            ? photos[userId].url
                            : require("../../assets/images/perfil.png")
                        }
                        className="rounded me-2 "
                        alt=""
                      ></img>
                      <div className="d-flex flex-column justify-content-start gap-4">
                        <p className="mt-4 h3 text-white">
                          {user && user[userId]
                            ? user[userId].name
                            : "Cargando..."}
                        </p>
                        <h5 className="mb-1 text-white">{title}</h5>
                      </div>
                    </div>

                    <div
                      className="d-flex flex-column justify-content-between "
                      style={{ height: 200 }}
                    >
                      <div>
                        <small
                          onClick={(e) => cambiarComplit(e, id)}
                          className="text-muted mt-2"
                          style={{ marginLeft: "auto" }}
                        >
                          {completed !== true ? (
                            <i className="fas fa-check bg-info p-2 rounded"></i>
                          ) : (
                            <i className="fas fa-x bg-secondary p-2 rounded"></i>
                          )}
                        </small>
                        <small className="text-muted mt-2 ms-1">
                          <i className="fas fa-genderless  bg-danger text-white p-2 rounded"></i>
                        </small>
                        <small className="text-muted mt-2 ms-1">
                          <i className="fas fa-exchange text-white bg-primary p-2 rounded"></i>
                        </small>
                      </div>
                      <small className="text-muted">paragraph footer</small>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Usuario: {user && user[ids] ? user[ids].name : "Cargando..."}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex gap-3 align-items-center">
              <img
                style={{ width: "55px", margin: 5, height: "55px" }}
                src={
                  photos && photos[ids]
                    ? photos[ids].url
                    : require("../../assets/images/perfil.png")
                }
                className="rounded-circle me-2 "
                alt=""
              ></img>
              <p className="mt-1  h2">
                {" "}
                {user && user[ids] ? user[ids].name : "Cargando..."}
              </p>
            </div>
            <div className="d-flex justify-content-around flex-wrap text-muted">
              <div>
                <p>
                  <b className="text-dark">Nombre de Usuario:</b>{" "}
                  {user && user[ids] ? user[ids].username : "Cargando..."}
                </p>
                <p>
                  <b className="text-dark">Correo: </b>
                  {user && user[ids] ? user[ids].email : "Cargando..."}
                </p>
                <p>
                  <b className="text-dark">Numero de telefono: </b>
                  {user && user[ids] ? user[ids].phone : "Cargando"}
                </p>
              </div>

              <div>
                <p className="h3 text-dark  text-monospace"> Compañía</p>
                <p>
                  <b className="text-dark">Sitio Web: </b>
                  {user && user[ids] ? user[ids].website : "Cargando..."}
                </p>
                <p>
                  <b className="text-dark">Nombre: </b>
                  {user && user[ids] ? user[ids].company.name : "Cargando..."}
                </p>
                <p>
                  <b className="text-dark">Nombre: </b>
                  {user && user[ids]
                    ? user[ids].company.catchPhrase
                    : "Cargando..."}
                </p>
                <p>
                  <b className="text-dark">Nombre: </b>
                  {user && user[ids] ? user[ids].company.bs : "Cargando..."}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <>
      <Menu />
      <div className="d-flex container">
        <Contenido />
      </div>
      <Footer />
    </>
  );
};
