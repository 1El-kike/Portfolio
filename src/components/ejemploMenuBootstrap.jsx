/* eslint-disable jsx-a11y/aria-props */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Alert, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faBriefcase,
  faChevronCircleRight,
  faExclamationCircle,
  faQuestionCircle,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../assets/css/practica.css";
import { Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";
import imagen from "../assets/images/12-tips-every-it-guy-should-know-man-with-laptop-11562889285hwldim1kbf.png";
import image2 from "../assets/images/1229908.jpg";
import image3 from "../assets/images/beautiful-15728_640.jpg";

const New = styled.div`
  position: absolute;
  box-shadow: 5px 0px 30px;
  border-radius: 6px;
  width: 600px;
  height: 400px;
  transition: 1s all ease;
  top: 15%;
  left: 30%;
  background-color: #fafbfc;
  z-index: 99;
`;

export const EjemploMenuBootstrap = () => {
  const [newnove, setnewnove] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [novedad, setnovedad] = useState(true);
  const [positio, setpositio] = useState(true);
  const [newpagina, setnewpagina] = useState(false);

  const handlenewpagina = () => {
    setnewpagina(!newpagina);
  };

  const handleposition = () => {
    setpositio(!positio);
  };

  const salidaDeNovedades = (e) => {
    setnewnove(!newnove);
  };

  const entradaDeNovedades = (e) => {
    setnewnove(!newnove);
  };
  /*   const Novedades = () => {
        setnovedad(!novedad)

    } */

  const obtenertime = () => {
    const hora = new Date().getHours();
    if (hora < 12) {
      return "Buenos dias";
    } else if (hora < 18) {
      return "Buenas tarde";
    } else {
      return "Buenas noches";
    }
  };

  const user = "kike";

  const obj = [
    {
      id: "1",
      pais: "EEUU",
      dolar: "USd",
      time: "(GTM-07:00)ETC/GTM+12",
    },
    {
      id: "2",
      pais: "Albania",
      dolar: "Corona danesa",
      time: "(GTM-12:00)Ect/GTM+11",
    },
    {
      id: "3",
      pais: "tarea numero 3",
      dolar: "Asignado por",
      time: "(GTM-11:00)Midway",
    },
    {
      id: "4",
      pais: "tarea numero 4",
      dolar: "Dolar Estadounidense",
      time: "(GTM-10:00)HST",
    },
  ];

  /* const [objeto, setobjeto] = useState(obj); */

  /*  window.open({ divagrega }, '_blank', 'width=500', 'height=500') */

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="mt-5 mb-5 col-sm-12 col-md-7 col-lg-8">
            <h1 className="text-light">
              {obtenertime()} {user}
            </h1>
            {novedad ? (
              <p className="text-success">
                Estas son las novedades de tu cuenta de hoy
              </p>
            ) : (
              <p className="text-danger">
                No hay novedades de tu cuenta en el dia de hoy
              </p>
            )}
            <div className="alert alert-light " role="alert">
              <b>Preparate para publicar un anuncio</b>
              <br></br>
              Confirma los siguientes detalles y podras publicar tu primer
              anuncio
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary ">
                  Continuar{" "}
                  <FontAwesomeIcon
                    icon={faChevronCircleRight}
                  ></FontAwesomeIcon>
                </button>
              </div>
            </div>

            <Accordion bg="info" defaultActiveKey={["0"]} alwaysOpen>
              {positio && (
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    💳 <b>Agregar metodos de pago</b>
                  </Accordion.Header>
                  <Accordion.Body>
                    Este es un metodo de pago que registraremos para tu cuenta
                    publicitaria. No c te cobrara nada hasta que los anuncios
                    esten en circulacion
                    <div className="d-flex justify-content-start mt-4 gap-5">
                      <button
                        style={{ position: "relative" }}
                        className="btn btn-primary"
                        onClick={entradaDeNovedades}
                      >
                        Agregar metodo de pago
                      </button>
                      {newnove && (
                        <New>
                          <div className="d-flex justify-content-between ml-4 mr-4">
                            <span></span>
                            <h3 className="text-black m-3">
                              Agregar información de pago
                            </h3>
                            <button
                              style={{
                                border: "none",
                                background: "#fafbfc",
                                padding: "0 20px",
                              }}
                              className=""
                              onClick={salidaDeNovedades}
                            >
                              <FontAwesomeIcon
                                fontSize={20}
                                icon={faX}
                              ></FontAwesomeIcon>
                            </button>
                          </div>
                          <div>
                            <h4 className=" text-black m-3">
                              Ubicación y divisa
                            </h4>
                            <div className="p-3 mt-0" action="">
                              <div className="d-flex" style={{ gap: "10px" }}>
                                <select className="form-select form-control-lg ">
                                  {obj.map((element) => {
                                    return (
                                      <option key={element.id}>
                                        {element.pais}
                                      </option>
                                    );
                                  })}
                                </select>
                                <select className="form-select form-control-lg ">
                                  {obj.map((element) => {
                                    return (
                                      <option key={element.id}>
                                        {element.dolar}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                              <div className="mt-3 m-b3">
                                <select className="form-select form-control-lg ">
                                  {obj.map((element) => {
                                    return (
                                      <option key={element.id}>
                                        {element.time}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>

                              <div
                                className="d-flex justify-content-center  align-items-center gap-2 flex-column"
                                style={{ height: "100px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faBasketShopping}
                                ></FontAwesomeIcon>
                                <p>
                                  La ubicacion y la divisa no se puede cambiar
                                  una ves establecida
                                </p>
                              </div>
                              <div className="d-flex">
                                <button
                                  type="submit "
                                  style={{ marginLeft: "auto" }}
                                  className="mt-2 btn btn-primary ml-auto "
                                >
                                  Enviar
                                </button>
                              </div>
                            </div>
                          </div>
                        </New>
                      )}
                      <button
                        onClick={handleposition}
                        className="btn btn-primary"
                      >
                        Omitir por Ahora
                      </button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              )}

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  💼 <b>Crear pagina de Facebook</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="p-4">
                    Para publicar la mayoria de los anuncios se necesita una
                    pagina ,que aparecera en tu anuncio como la marca o el
                    negocio que quiera promocionar.Si noo tienes una pagina,
                    puedes crear una ahora y realizar cambios cuando quieras.{" "}
                    <Link to="/">Mas informacion</Link>
                  </p>
                  <button onClick={handlenewpagina} className="btn btn-primary">
                    Crear Pagina
                  </button>
                  {
                    <Modal
                      className="d-flex flex-column"
                      size=""
                      isOpen={newpagina}
                    >
                      <ModalHeader>
                        <div className="row  m-2">
                          <div className="col-md-11">
                            <h4 className="h4">Crear Pagina</h4>
                            <p className="h6">
                              Para publicar anuncio se necesita una pagina.Crea
                              una para que las personas encuentren e interactuen
                              con tu marca ,negocio u organizacion.
                              <Link to={"#"}>Mas informacion</Link>.
                            </p>
                          </div>
                          <div className="col-md-1">
                            <FontAwesomeIcon
                              onClick={handlenewpagina}
                              icon={faX}
                            ></FontAwesomeIcon>
                          </div>
                        </div>
                      </ModalHeader>
                      <ModalBody className="m-2">
                        <h5>Nombre de pagina</h5>
                        <p>
                          Usa el nombre de tu marca o negocio, o su nombre que
                          explique de que trata tu pagina.
                        </p>
                        <from className="form-grup">
                          <input
                            className=" form-control "
                            placeholder="0/75"
                          ></input>
                        </from>
                        <h5>Categoría</h5>
                        <p>
                          Busca y selecciona una categoria que describa el tipo
                          de organización o tema que represente tu página.
                          Puedes agregar tres opciones.
                          <Link to={"#"}>Mas información</Link>
                        </p>
                        <from className="form-grup">
                          <input className=" form-control "></input>
                        </from>
                        <h5>
                          Foto de perfil{" "}
                          <FontAwesomeIcon
                            icon={faExclamationCircle}
                          ></FontAwesomeIcon>
                        </h5>
                        <p>
                          Usa un logotipo o una imagen que ayude a las personas
                          a identificar tu pagina en los resyltados de la
                          búsqueda.
                        </p>
                        <div className="d-block mb-2">
                          <Image
                            width={200}
                            height={200}
                            src={imagen}
                            alt="no se encuentra"
                          />
                        </div>
                        <button className="btn btn-light">
                          Agregar foto de perfil
                        </button>
                      </ModalBody>
                      <ModalFooter>
                        <button
                          className="btn btn-primary"
                          onClick={handlenewpagina}
                        >
                          Cancelar{" "}
                        </button>
                        <button className="btn btn-primary">
                          Crear pagina
                        </button>
                      </ModalFooter>
                    </Modal>
                  }
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  📞 <b>Verificar numero de telefono</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="p-4">
                    Antes de que publiques anuncios ,debes agregar un numero de
                    telefono verificado a tu cuenta publicitaria. No compartimos
                    este numero de forma publica{" "}
                  </p>

                  <button className="btn btn-primary">Agregar Numero</button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {!positio && (
              <Alert
                variant="light"
                transition="slide"
                className="d-flex align-items-center "
              >
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className="m-3"
                  fontSize={32}
                ></FontAwesomeIcon>
                <div>
                  <Alert.Heading>
                    Agregar metodos de pago
                    <hr></hr>
                  </Alert.Heading>
                  <p className="h6">
                    Omitiste este paso .Es posible que te pidamos que confirmes
                    esta informacion mas adelante cuando lo tengas todo listo
                  </p>
                </div>
              </Alert>
            )}
          </div>

          <div className="mt-5 mb-5  col-sm-12 col-md-5  col-lg-4">
            <aside className="">
              <div className="mb-5 p-4"></div>

              <div className="bg-light rounded p-2 ml-3 mb-3">
                <div className="d-flex justify-content-start align-items-center ">
                  <span className="m-3">
                    <i>
                      <FontAwesomeIcon
                        className="rounded-circle"
                        style={{
                          background: "#9e9c9c",
                          width: "25px",
                          height: "25px",
                          padding: "10px",
                        }}
                        icon={faBriefcase}
                      ></FontAwesomeIcon>
                    </i>
                  </span>
                  <div className="ma-auto">
                    <h5 className="text-black ">Enrique Grass Porras</h5>
                    <p className="text-secound">66756754394853</p>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between  p-lg-0  mt-0 "
                  style={{ marginLeft: "0.50rem" }}
                >
                  <p>Campaña activas</p>
                  <p
                    style={{ marginRight: "0.50rem" }}
                    className="text-primary"
                  >
                    0
                  </p>
                </div>
                <div
                  className="d-flex justify-content-start p-lg-0 mb-0 mt-0 align-items-start  "
                  style={{ marginLeft: "0.50rem" }}
                >
                  <p>
                    <b>Ultimos 7 días</b>
                  </p>
                  <FontAwesomeIcon
                    className="m-2"
                    icon={faQuestionCircle}
                  ></FontAwesomeIcon>
                </div>
                <div
                  className="d-flex justify-content-start  p-lg-0 mb-0 mt-0"
                  style={{ marginLeft: "0.50rem" }}
                >
                  <p>Importe gastado</p>
                  <FontAwesomeIcon
                    className="m-2"
                    icon={faQuestionCircle}
                  ></FontAwesomeIcon>
                  <span style={{ marginLeft: "auto", paddingRight: "0.50rem" }}>
                    $0,00
                  </span>
                </div>
                <div
                  className="d-flex justify-content-start  p-lg-0 mb-0 mt-0"
                  style={{ marginLeft: "0.50rem" }}
                >
                  <p>Porcentaje gastado en la fase de aprendizaje</p>
                  <FontAwesomeIcon
                    className="m-2"
                    icon={faQuestionCircle}
                  ></FontAwesomeIcon>
                  <span style={{ marginLeft: "auto", paddingRight: "0.50rem" }}>
                    0%
                  </span>
                </div>
              </div>
              <div className=" rounded p-3  bg-light mb-3">
                <div className="d-flex">
                  <Image
                    className="rounded-circle"
                    width={50}
                    height={50}
                    src={image2}
                    alt="no se encuentra"
                  />
                  <p style={{ paddingLeft: "0.90rem" }} className="pr-1">
                    <b> Aplicar recomendaciones de entrega automáticamente </b>
                  </p>
                </div>
                <div style={{ paddingLeft: "0.50rem" }} className="d-fex">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      role="switch"
                    />
                    <label className="">Activar ajustes automaticos</label>

                    <p style={{ paddingTop: "0.50rem" }}>
                      {" "}
                      Las recomendaciones se generan cuando hay una oportunidad
                      de mejorar el rendimiento de la campaña. Puedes controlar
                      los tipos de ajustes automáticos y desactivarlos cuando
                      quieras. <Link to={"/"}>Mas informacion</Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className=" rounded p-3  bg-light">
                <h4>Tareas completas </h4>
                <p>
                  Completa la configuracion para aprobechar al máximo tu cuenta
                  publicitaria
                </p>
                <div
                  style={{ height: "19px" }}
                  className="progress rounded "
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-aria-valuemax="100"
                >
                  <div
                    className="progress-bar bg-success "
                    style={{ width: "15%" }}
                  >
                    15%
                  </div>
                </div>
                <div className="mt-3">
                  <Image
                    width={"100%"}
                    height={200}
                    src={image3}
                    alt="no se encuentra"
                  />
                </div>
                <div className="mt-3">
                  <h4>Empieza a proporcionar tu app</h4>
                </div>
                <p>
                  Deberas configurar tu app para publicar campañas de promoción.
                  te quiaremos paso a paso para asegurarnos de que la app se
                  configure correctamente.
                </p>
                <button className="btn btn-primary">Empezar</button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};
