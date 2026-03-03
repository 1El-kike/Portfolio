import React from "react";

export const Section = ({ children, id, className = "" }) => (
  <section
    id={id}
    className={`w-full flex flex-col text-white py-8 px-4 sm:px-6 ${className}`}
    aria-label={id ? id.replace(/([A-Z])/g, " $1").trim() : "Section"}
  >
    <div className="w-full">{children}</div>
  </section>
);
