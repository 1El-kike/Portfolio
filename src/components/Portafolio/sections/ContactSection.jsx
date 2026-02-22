import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { ContactItem } from "../components/ContactItem";
import { Button } from "../components/Button";

export const ContactSection = () => (
  <>
    <div className="d-flex  col-12 flex-wrap ">
      <div className="d-flex flex-column col-lg-4 col-md-6 col-sm-12 ">
        <div className="d-flex flex-column flex-wrap gap-2">
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
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/Enrique_Grass_Porras"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1 "
            style={{ backgroundColor: "#55acee" }}
            href=""
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="https:/www.youtube.com/"
            role="button"
          >
            <MDBIcon fab icon="youtube" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1 "
            style={{ backgroundColor: "#e7960a" }}
            href="https:/www.linkedin.com/"
            role=""
          >
            <MDBIcon fab icon="linkedin" />
          </MDBBtn>
        </div>
      </div>
      <div className="d-flex flex-column  col-lg-8 col-md-6 col-sm-12">
        <form className="form-grup  col-lg-11 col-md-12">
          <div className="d-flex gap-4 flex-wrap justify-content-between ">
            <div className="col-lg-5 col-md-12 col-sm-12 ">
              <input
                className="form-control input-round input "
                key={"input"}
                placeholder="YOUR NAME"
                type="text"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <input
                className="form-control input-round input "
                key={"input"}
                placeholder="YOUR EMAIL"
                type="text"
              />
            </div>
          </div>
          <div className="d-flex col-12 mt-4 justify-content-start ">
            <div className="col-12 ">
              <input
                className="form-control input-round  input"
                key={"input"}
                placeholder="YOUR SUBJECT"
                type="text"
              />
            </div>
          </div>
          <div className="d-flex col-12 mt-4 justify-content-start">
            <div className="col-12">
              <textarea
                className="form-control input-round textarea mb-4 input"
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
