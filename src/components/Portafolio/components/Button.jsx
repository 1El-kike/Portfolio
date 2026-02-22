import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ buttons, ico, href = "#", onClick }) => {
  return (
    <Link onClick={onClick} to={href}>
      <button className="btn mt-3 btn-outline-info rounded-pill btn-lg">
        <div className="d-flex flex-direction-around but gap-3 justify-content-center align-items-center">
          <span>{buttons}</span>
          <span className="ps-3" />
          <span className="butarrow bg-info">
            <i className={`fas ${ico} text-black ml-auto`} />
          </span>
        </div>
      </button>
    </Link>
  );
};
