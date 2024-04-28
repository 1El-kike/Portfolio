import React from "react";
import { Menu } from "../components/Menu/Menu";
import { Footer } from "../components/footer";

export const ErrorRouter = () => {
  const Error = () => {
    return (
      <div
        className="container mt-3 d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div
          className="alert alert-danger"
          style={{ width: "90%" }}
          role="alert"
        >
          <h4
            style={{ fontWeight: "bold" }}
            className="alert-heading display-6"
          >
            Error De Autentificacion
          </h4>
          <p>
            Porfavor para seguir navegando por esta pagina esta session requiere
            que se autentifique
          </p>
          <hr />
          <p className="mb-0">Descritción de Alerta</p>
        </div>

        <div
          className="alert alert-primary"
          style={{ width: "90%" }}
          role="alert"
        >
          <h4 className="alert-heading">Siguiente Paso</h4>
          <p>Siga el siguiente link para crear una cuenta</p>
          <hr />
          <p className="mb-0">Link:</p>
        </div>

        <div className="alert alert-primary" role="alert">
          <strong>Warning!</strong>
          <a href="#" class="alert-link">
            Click Here
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <Menu />
        <Error />
        <Footer />
      </div>
    </>
  );
};
