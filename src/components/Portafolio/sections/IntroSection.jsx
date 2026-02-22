import React from "react";
import image from "../../../assets/images/portafolio.jpg";
import { Button } from "../components/Button";

export const IntroSection = () => (
  <div
    className="col-md-11 col-sm-12 d-flex flex-column text-light "
    id="lista1"
  >
    <div className=" d-flex flex-wrap-reverse justify-content-center">
      <div className="col-md-12 col-sm-12 col-lg-5 mt-5">
        <div className="img1">
          <div className="espensy">
            <img src={image} className="fondo" alt="no se encuentra" />
          </div>
        </div>
      </div>

      <div className=" col-md-12 col-sm-12  col-lg-7 flex-wrap d-flex ">
        <div className="col-md-11 d-flex flex-column justify-content-center align-items-start mt-5 mb-0">
          <div className="d-flex flex-column ">
            <div className="d-flex gap-4  justify-content-center ">
              <span className="raya mt-auto ms-auto mb-auto"></span>
              <h1 className="text-warning display-3 text-fondo">
                I'M Enrique Grass.
              </h1>
            </div>
            <h2 className="text-light mx-auto d-flex text-fondo display-4">
              WEB DEVELOP
            </h2>
          </div>
          <div className="inline">
            <p className=" col-md-10 p-4 texto-p h-4">
              Graduate in Computer Engineering, passionate about web development
              and design, specialized as a Front-End developer. I would like to
              contribute and gain experience in everything I can to be a better
              option in this great digital world. I hope to be of great help and
              manage to meet expectations to achieve better professional
              development.
            </p>
          </div>
        </div>

        <Button buttons="MORE ABOUT ME" ico="fa-arrow-right" href="/" />
      </div>
    </div>
  </div>
);
