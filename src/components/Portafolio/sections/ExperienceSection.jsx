import React from "react";
import { Experience } from "../components/Experience";

export const ExperienceSection = () => (
  <>
    <div className="col-lg-11 col-md-12">
      <div className="col-md-12  justify-content-center d-flex">
        <h3>EXPERIENCE & EDUCATION</h3>
      </div>
      <div
        style={{ marginLeft: "25px" }}
        className="d-flex col-md-12 mb-5 mt-5 d-flex flex-wrap"
      >
        <Experience />
      </div>
    </div>
  </>
);
