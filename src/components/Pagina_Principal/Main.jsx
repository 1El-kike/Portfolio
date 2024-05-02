import React, { useState } from "react";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { AsideLeft } from "./Aside/segundo_componente";
import { Paginacion } from "./Article_section/Paginacion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap";

export const Main = () => {
  const [num, setnum] = useState(0);
  const [page, setpage] = useState([]);

  const datospadre = (num) => {
    setnum(num);
    console.log(num);
  };

  const moverPaginas = (page) => {
    setpage(page);
  };

  const [ancho, setancho] = useState(window.innerWidth);

  window.addEventListener("resize", function () {
    var ancho = this.window.innerWidth;
    setancho(ancho);
  });

  return (
    <>
      <div className="container d-flex  gap-3 align-items-start">
        {ancho >= 992 && (
          <div className="col-lg-4 col-md-4 justify-content-center  d-none d-md-block  sidebar">
            <AsideLeft className=" " />
          </div>
        )}
        <div
          style={{}}
          className="col-lg-8 col-md-12 col-12 order-2 mr-1 d-flex justify-content-center"
        >
          <PaginaPrincipal moverPaginas={moverPaginas} num={num} />
        </div>
      </div>

      <div className="w-100 col-12 d-flex justify-content-center align-items-center">
        <div className="col-12 m-3">
          <Paginacion
            datos={num}
            datospadre={datospadre}
            className="container bg-black"
            pagina={page}
          />
        </div>
      </div>
    </>
  );
};
