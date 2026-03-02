import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { ContactItem } from "../components/ContactItem";
import { Button } from "../components/Button";

export const ContactSection = () => (
  <>
    <div className="flex w-full flex-wrap ">
      <div className="flex flex-col lg:w-1/4 md:w-1/2 sm:w-full ">
        <div className="flex flex-col flex-wrap gap-2">
          <h3>DONT'BE SHY !</h3>
          <p>
            Feel free to get in touch with me.I am alwasy open to <br />{" "}
            discussing new projects, creative ideas or opportunities to
            <br /> be part of your visions
          </p>
          <ContactItem
            titulo={"ADDRESS POINT"}
            ico={"fa-map"}
            adress={"calle 206 e/  26 y 27a, Habana City ,Cuba"}
          />
          <ContactItem
            titulo={"MAIL ME"}
            ico={"fa-envelope"}
            adress={"enriquegrassporras@gmail.com"}
          />
          <ContactItem
            titulo={"ADDRESS POINT"}
            ico={"fa-bank"}
            adress={"+53 58428530"}
          />
        </div>
        <div className="mt-4 mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "var(--black)" }}
            href="https://www.facebook.com/Enrique_Grass_Porras"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1 "
            style={{ backgroundColor: "var(--red)" }}
            href=""
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "var(--red)" }}
            href="https:/www.youtube.com/"
            role="button"
          >
            <MDBIcon fab icon="youtube" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1 "
            style={{ backgroundColor: "var(--yellow)" }}
            href="https:/www.linkedin.com/"
            role=""
          >
            <MDBIcon fab icon="linkedin" />
          </MDBBtn>
        </div>
      </div>
      <div className="flex flex-col lg:w-2/3 md:w-1/2 sm:w-full">
        <form className="lg:w-11/12 md:w-full">
          <div className="flex gap-4 flex-wrap justify-between ">
            <div className="lg:w-5/12 md:w-full sm:w-full ">
              <input
                className="rounded-full bg-gray-900 border-0 h-10 text-white text-base focus:bg-gray-700 focus:border-0 focus:text-green-400 w-full "
                key={"input"}
                placeholder="YOUR NAME"
                type="text"
              />
            </div>
            <div className="lg:w-1/2 md:w-full sm:w-full ">
              <input
                className="rounded-full bg-gray-900 border-0 h-10 text-white text-base focus:bg-gray-700 focus:border-0 focus:text-green-400 w-full"
                key={"input"}
                placeholder="YOUR EMAIL"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full mt-4 justify-start ">
            <div className="w-full ">
              <input
                className="rounded-full bg-gray-900 border-0 h-10 text-white text-base focus:bg-gray-700 focus:border-0 focus:text-green-400 w-full"
                key={"input"}
                placeholder="YOUR SUBJECT"
                type="text"
              />
            </div>
          </div>
          <div className="flex w-full mt-4 justify-start">
            <div className="w-full">
              <textarea
                className="rounded-full bg-gray-900 border-0 min-h-52 max-h-96 text-white text-base focus:bg-gray-700 focus:border-0 focus:text-green-400 mb-4 w-full p-4"
                key={"input"}
                placeholder="YOUR MESSAGE"
                type="month"
              ></textarea>
            </div>
          </div>

          <Button buttons="SEND MESSAGE" ico="fa-user" href="#" />
        </form>
      </div>
    </div>
  </>
);
