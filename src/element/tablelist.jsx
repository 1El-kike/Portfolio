/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
/* import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'; */
//import { useEjecut } from '../hooks/useEjecut'

//const { data, isLoading, errors } = useEjecut('https://jsonplaceholder.typicode.com/users')

export const Tablelist = () => {
  const tabla = [
    {
      id: "1",
      name: "1",
      actividad: "Aprender html, Css, Js",
      responsable: "cumplido",
      observacion: "algun punto de observacion",
    },
    {
      id: "2",
      name: " 2",
      actividad: "Aprender Bootstrap y Tailwind",
      responsable: "pendiente",
      observacion: "Me falta aprender mas",
    },
    {
      id: "3",
      name: " 3",
      actividad: "Aprender React,Next.js,Express y Node js",
      responsable: "pendiente",
      observacion: "Ya estoy practicando React",
    },
    {
      id: "4",
      name: " 4",
      actividad: "Aprender Base de Datos, sql y test",
      responsable: "cumplido o peendiente",
      observacion: "pendiente",
    },
  ];

  const addlist = (id, name, responsable, observaciones) => {
    setarreglo([
      ...arreglo,
      {
        id: id,
        name: arreglo.length + 1,
        actividad: name,
        responsable: responsable,
        observacion: observaciones,
      },
    ]);
    document.getElementById("btnCerrar").click();
  };

  const deletelist = (id, name, actividad, responsable, observacion) => {
    setId(id === undefined);
    setname(name === undefined);
    setactividad(actividad === undefined);
    setresponsable(responsable === undefined);
    setobservaciones(observacion === undefined);
    setarreglo([...arreglo]);
  };

  const [arreglo, setarreglo] = useState(tabla);
  const [name, setname] = useState("");
  const [actividad, setactividad] = useState("");
  const [responsable, setresponsable] = useState("");
  const [observaciones, setobservaciones] = useState("");
  const [operation, setoperation] = useState(1);
  const [title, settitle] = useState("");
  const [id, setId] = useState("");

  const openModal = (op, id, name, responsable, observaciones) => {
    setname("");
    setresponsable("");
    setobservaciones("");
    setoperation(op);

    if (op === 1) {
      settitle("Registrar Producto");
    } else if (op === 2) {
      settitle("Editar Producto");
      setId(id);
      setname(name);
      setresponsable(responsable);
      setobservaciones(observaciones);
    }
    window.setTimeout(() => {
      document.getElementById("nombre").focus();
    }, 500);
  };

  /* const deleteProducts = (id, name) => {
        const MySwal = withReactContent(Smal);
        MySwal.fire({
            title: `Seguro de eliminar el producto ${name} `,
            icon: 'question', text: 'No se podra dar marcha atras',
            showCancelButton: true, confirmButtonText: 'si,eliminar', cancelButtonText: 'Cancelar'
        })
    } */

  return (
    <>
      <div
        className="container"
        style={{ marginBottom: "50px", marginTop: "60px" }}
      >
        {
          /*   isLoading
                          ? <h4>Cargando...</h4>
                          : errors
                              ? <p>Ha ocurrido un error:{errors}</p>
                              :  */
          <div className="row">
            <div className="col-12 col-lg-10 offset-0 offset-lg-1">
              <div className="table-responsive">
                <table
                  className="table table-bordered  
                      table-border "
                >
                  <thead>
                    <tr className="table-success ">
                      <th className="table-info ">#</th>
                      <th className="table-info">Actividad</th>
                      <th className="table-info">Responsable</th>
                      <th className="table-info">Observaciones</th>
                      <th className="table-info"></th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {arreglo.map((user) => {
                      return (
                        <tr className="table-light" key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.actividad}</td>
                          <td>{user.responsable}</td>
                          <td>{user.observacion}</td>
                          <td>
                            <button
                              onClick={() =>
                                openModal(
                                  2,
                                  user.id,
                                  user.actividad,
                                  user.responsable,
                                  user.observacion
                                )
                              }
                              data-bs-toggle="modal"
                              data-bs-target="#modalProducts"
                              className="btn btn-warning"
                            >
                              <i className="fa-solid fa-edit"></i>
                            </button>
                            &nbsp;
                            <button
                              onClick={() =>
                                deletelist(
                                  user.id,
                                  user.name,
                                  user.actividad,
                                  user.responsable,
                                  user.observacion
                                )
                              }
                              className="btn btn-danger"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }

        <div id="modalProducts" className="modal fade" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <label className="h5">{title}</label>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                {/*  <input type='hidden' id='id'> </input> */}
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-gift"></i>
                  </span>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Actividad"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-comment"></i>
                  </span>
                  <input
                    type="text"
                    id="responsable"
                    className="form-control"
                    placeholder="Responsable"
                    value={responsable}
                    onChange={(e) => setresponsable(e.target.value)}
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fa-solid fa-bell"></i>
                  </span>
                  <input
                    type="text"
                    id="observaciones"
                    className="form-control"
                    placeholder="Observaciones"
                    value={observaciones}
                    onChange={(e) => setobservaciones(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-grid col-5 mx-auto">
                  <button
                    onClick={() =>
                      addlist(arreglo.length, name, responsable, observaciones)
                    }
                    className="btn btn-success gap-2"
                  >
                    <i className="fa-solid fa-floppy-disk "></i>
                    <span className="m-2">Guardar</span>
                  </button>
                </div>
                <div className="d-grid ml-3 col-5 mx-auto">
                  <button
                    id="btnCerrar"
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => openModal(1)}
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#modalProducts"
        >
          <i className="fa-solid fa-circle"></i> Agregar
        </button>
      </div>
    </>
  );
};
