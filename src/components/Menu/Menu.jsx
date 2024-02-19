import "../../assets/css/practica.css";
import { faUnlock, faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { Title } from "./menuStyle";
import { Input } from "reactstrap";
import "./estilos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Menu = () => {
  const nombre = "Blog";

  return (
    <>
      <div className="container">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="mt-2 rounded navbar-custom "
        >
          <Container fluid>
            <Title href="">
              <Link to={"/portfolio"}>
                <span className="text-success">Folio</span>
                <span className="text-light">G</span>
              </Link>
            </Title>
            <Navbar.Toggle aria-controls="offcanvas" />
            <Navbar.Offcanvas
              id="offcanvas"
              aria-labelledby="offcanvasNavbarLavel-expand-sm"
              placement="end"
            >
              <Offcanvas.Header className="mycustom" closeButton>
                <Offcanvas.Title id="offcanvasNavbarLaber">
                  <span className="tit">Menu</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start ms-5 flex-grow-1 pe-3 gap-4">
                  <Link
                    to={"/"}
                    id="nav-dropdown"
                    className="align-items-center gap-2 d-flex naver"
                  >
                    <FontAwesomeIcon className="" icon={faHomeAlt} />
                    {nombre}
                  </Link>
                  <Link
                    to={"/about"}
                    id="nav-dropdown"
                    className="align-items-center gap-2 d-flex naver"
                  >
                    <FontAwesomeIcon icon={faUnlock} />
                    <span>API</span>
                  </Link>

                  <NavDropdown
                    title="Ejemplos Web"
                    data-bs-theme="dark"
                    id="nav-dropdown"
                    menuVariant=""
                    className="naver"
                  >
                    <NavDropdown.Item href="">
                      <Link to={"/formulario"} className="dropdown-item ">
                        Formulario
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="">
                      <Link to={"/table"} className="dropdown-item">
                        Tabla
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="">
                      <Link to={"/prueba"} className="dropdown-item">
                        Negocio
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="">
                      <Link to={"/props"} className="dropdown-item">
                        Vuelos
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Ingresar"
                    id="nav-dropdown"
                    className="naver"
                  >
                    <NavDropdown.Item href="">
                      <Link to={"/registro"} className="dropdown-item">
                        Registrarse
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="">
                      <Link to={"#"} className="dropdown-item">
                        Autentificarse
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link to={"#"} className="dropdown-item">
                        Configuracion
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      <Link to={"/"} className="dropdown-item">
                        Salir
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Input type="text" placeholder="Search" className="m-1" />
                  <Button
                    type="submit"
                    className="m-1"
                    variant="outline-success"
                  >
                    Buscar
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
