import React from "react";

export const Title = ({ background, titulo, subtitulo, link }) => (
  <div className="col-md-12 col-sm-12 d-flex" id={link}>
    <div className="justify-content-center align-items-center d-flex col-12 ">
      <div className="position-relative alt ">
        <h1 className="display-2 text position-absolute top-0">{background}</h1>
        <h1 className="display-6 text2 text-light d-flex gap-1 pos position-absolute w-100">
          {titulo}
          <span className="text-success">{subtitulo}</span>
        </h1>
      </div>
    </div>
  </div>
);
