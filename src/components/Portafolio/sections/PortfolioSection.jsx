import React, { useState } from "react";
import { PortfolioGallery } from "../components/PortfolioGallery";

export const PortfolioSection = ({ imagesSets, links }) => {
  const [activeSet, setActiveSet] = useState("set1");
  const currentImages = imagesSets[activeSet] || [];

  return (
    <div className="col-lg-12 mb-5 col-md-12">
      <nav className="col-12 d-flex justify-content-center align-items-center">
        <ul className="nav justify-content-center gap-5">
          {Object.keys(imagesSets).map((name) => (
            <li
              key={name}
              className="nav-item my-li"
              onClick={() => setActiveSet(name)}
            >
              {name.toUpperCase().replace("SET", "") === "1"
                ? "ALL"
                : name.toUpperCase().replace("SET", "")}
            </li>
          ))}
        </ul>
      </nav>
      <div className="" style={{ marginRight: "60px", width: "100%" }}>
        <div className="col-lg-12 gap-3 mt-5 mb-5 d-flex flex-wrap justify-content-center align-items-center ">
          <PortfolioGallery images={currentImages} links={links} />
        </div>
      </div>
    </div>
  );
};
