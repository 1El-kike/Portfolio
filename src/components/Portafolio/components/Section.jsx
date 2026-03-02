import React from "react";

export const Section = ({ children, id }) => (
  <div className="w-full flex mt-5 mb-5 flex-col text-white" id={id}>
    {children}
  </div>
);
