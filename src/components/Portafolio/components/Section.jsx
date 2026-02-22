import React from "react";

export const Section = ({ children, id }) => (
  <div className="col-12 d-flex mt-5 mb-5 flex-column text-light" id={id}>
    {children}
  </div>
);
