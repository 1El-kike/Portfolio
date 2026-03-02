import React from "react";
import { Link } from "react-router-dom";

export const PortfolioGallery = ({ images, links }) => (
  <>
    {images.map((src, i) => (
      <div
        key={i}
        style={{ overflow: "hidden", width: "400px", height: "300px" }}
        className="bg-gray-900 flex rounded justify-center items-center lg:w-1/3 md:w-1/2 transition-transform duration-300 ease hover:scale-110"
      >
        <Link to={links[i]}>
          <div className="relative overflow-hidden transition-transform duration-300 ease hover:scale-110 hover:z-10 group">
            <img
              style={{ width: "400px", height: "280px" }}
              className="w-full h-auto"
              src={src}
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex m-3 justify-around ">
                <p>Link: {links[i]}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </>
);
