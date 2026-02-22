import React from "react";

export const Cuadro = ({ num, text }) => (
  <div data-aos="flip-left" className="cuadro col-5 mt-2 mb-2">
    <div className="d-flex">
      <h2 className="text text-warning display-1 ps-2">{num}</h2>
      <span className="top-5 mt-1 ms-2 text text-warning display-6">+</span>
    </div>
    <div className="d-flex justify-content-between">
      <span className="raya" />
      <p className="margen text-light">{text}</p>
    </div>
  </div>
);
