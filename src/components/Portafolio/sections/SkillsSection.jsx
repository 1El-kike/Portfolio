import React from "react";
import { Progres } from "../components/Progres";

export const SkillsSection = () => (
  <>
    <div className="md:w-11/12 sm:w-full">
      <div className="md:w-full justify-center flex">
        <h3>MY SKILLS</h3>
      </div>

      <div
        style={{ marginLeft: "95px" }}
        className="flex md:w-full mb-5 mt-5 flex-wrap"
      >
        <Progres />
      </div>
    </div>
  </>
);
