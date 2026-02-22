import React from "react";
import { Button } from "../components/Button";
import { Cuadro } from "../components/Cuadro";

export const PersonalInfoSection = ({ onDownload }) => (
  <>
    <div className="d-flex  flex-wrap  justify-content-center col-12">
      <div className="col-md-12 col-lg-6 col-12 ">
        <div className="col-12 d-flex flex-column justify-content-end">
          <h2 className="text-light">PERSONAL INFOS</h2>
          <div className="d-flex flex-wrap justify-content-around">
            <div
              style={{ minWidth: "200px" }}
              className="col-lg-6 col-md-12 col-sm-12 col-12  d-flex flex-column gap-1  mt-4"
            >
              <p className="text-secondary">
                First Name: <b className="text-light">Enrique</b>{" "}
              </p>
              <p className="text-secondary">
                Nationality: <b className="text-light">Cuba</b>{" "}
              </p>
              <p className="text-secondary">
                Address: <b className="text-light">La Habana</b>{" "}
              </p>
              <p className="text-secondary">
                Email:{" "}
                <b className="text-light">enriquegrassporras@gmail.com</b>{" "}
              </p>
              <p className="text-secondary">
                Langages: <b className="text-light">English, Spanish</b>{" "}
              </p>
            </div>
            <div className=" col-lg-6 col-md-12 col-sm-12 col-12  d-flex flex-column gap-1 mt-4">
              <p className="text-secondary">
                Last Name: <b className="text-light">Grass</b>{" "}
              </p>
              <p className="text-secondary">
                Age: <b className="text-light">25 Years</b>{" "}
              </p>
              <p className="text-secondary">
                Freelance: <b className="text-light">Available</b>{" "}
              </p>
              <p className="text-secondary">
                Phone: <b className="text-light">+53 58428530</b>{" "}
              </p>
              <p className="text-secondary">
                Skype: <b className="text-light">grass.@porras</b>{" "}
              </p>
            </div>
          </div>
          <div className="col-3S mt-2">
            <Button
              onClick={onDownload}
              buttons="DOWNLOAD CV"
              ico="fa-download"
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6 mt-3 col-md-12 col-sm-12 d-flex flex-wrap gap-4 mt-2">
        <Cuadro num="2" text="YEARS OF EXPERENCE" />
        <Cuadro
          num="8"
          text="HAPPY 
      CUSTOMERS"
        />
        <Cuadro
          num="6"
          text="COMPLETED 
      PROJECTS"
        />
        <Cuadro
          num="3"
          text="AWARDS
      WOW"
        />
      </div>
    </div>
  </>
);
