import React from "react";
import { Progres } from "../components/Progres";

export const SkillsSection = () => (
  <>
    <div className="col-md-11  col-sm-12">
      <div className="col-md-12 justify-content-center d-flex">
        <h3>MY SKILLS</h3>
      </div>

      <div
        style={{ marginLeft: "95px" }}
        className="d-flex col-md-12 mb-5 mt-5 d-flex flex-wrap"
      >
        <Progres />
      </div>
    </div>
  </>
);
