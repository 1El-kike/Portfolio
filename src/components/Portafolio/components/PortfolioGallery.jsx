import React from "react";
import { Link } from "react-router-dom";

export const PortfolioGallery = ({ images, links }) => (
  <>
    {images.map((src, i) => (
      <div
        key={i}
        style={{ overflow: "hidden", width: "400px", height: "300px" }}
        className="bg-dark d-flex rounded justify-content-center align-items-center col-lg-3 col-md-6 hover"
      >
        <Link to={links[i]}>
          <div className="list-items">
            <img
              style={{ width: "400px", height: "280px" }}
              className="image"
              src={src}
              alt=""
            />
            <div className="list-items-info">
              <div className="d-flex m-3 justify-content-around ">
                <p>Link: {links[i]}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))}
  </>
);
