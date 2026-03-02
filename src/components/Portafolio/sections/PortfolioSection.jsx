import React, { useState } from "react";
import { PortfolioGallery } from "../components/PortfolioGallery";

export const PortfolioSection = ({ imagesSets, links }) => {
  const [activeSet, setActiveSet] = useState("set1");
  const currentImages = imagesSets[activeSet] || [];

  return (
    <div className="lg:w-full mb-5 md:w-full">
      <nav className="w-full flex justify-center items-center">
        <ul className="nav justify-center gap-5">
          {Object.keys(imagesSets).map((name) => (
            <li
              key={name}
              className="nav-item transition-transform duration-300 ease hover:scale-110 cursor-pointer"
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
        <div className="lg:w-full gap-3 mt-5 mb-5 flex flex-wrap justify-center items-center ">
          <PortfolioGallery images={currentImages} links={links} />
        </div>
      </div>
    </div>
  );
};
