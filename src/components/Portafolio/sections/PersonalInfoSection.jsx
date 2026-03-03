import React from "react";
import { Button } from "../components/Button";
import { Cuadro } from "../components/Cuadro";

export const PersonalInfoSection = ({ onDownload }) => (
  <>
    <div className="flex flex-wrap justify-center w-full">
      <div className="w-full md:w-full lg:w-1/2 ">
        <div className="w-full flex flex-col justify-end gap-4">
          <h2 className="text-white">PERSONAL INFOS</h2>
          <div className="flex flex-wrap justify-around">
            <div
              style={{ minWidth: "200px" }}
              className="w-full lg:w-1/2 md:w-full sm:w-full flex flex-col gap-1  mt-4"
            >
              <p className="text-gray-400">
                First Name: <b className="text-white">Enrique</b>{" "}
              </p>
              <p className="text-gray-400">
                Nationality: <b className="text-white">Cuba</b>{" "}
              </p>
              <p className="text-gray-400">
                Address: <b className="text-white">La Habana</b>{" "}
              </p>
              <p className="text-gray-400">
                Email:{" "}
                <b className="text-white">enriquegrassporras@gmail.com</b>{" "}
              </p>
              <p className="text-gray-400">
                Langages: <b className="text-white">English, Spanish</b>{" "}
              </p>
            </div>
            <div className="w-full lg:w-1/2 md:w-full sm:w-full flex flex-col gap-1 mt-4">
              <p className="text-gray-400">
                Last Name: <b className="text-white">Grass</b>{" "}
              </p>
              <p className="text-gray-400">
                Age: <b className="text-white">26 Years</b>{" "}
              </p>
              <p className="text-gray-400">
                Freelance: <b className="text-white">Available</b>{" "}
              </p>
              <p className="text-gray-400">
                Phone: <b className="text-white">+53 58428530</b>{" "}
              </p>
              <p className="text-gray-400">
                Skype: <b className="text-white">grass.@porras</b>{" "}
              </p>
            </div>
          </div>
          <div className=" mt-3">
            <Button
              onClick={onDownload}
              buttons="DOWNLOAD CV"
              ico="fa-download"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 md:w-full sm:w-full flex flex-wrap gap-4 mt-3">
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
