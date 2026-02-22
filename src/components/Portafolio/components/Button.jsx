import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ buttons, ico, href = "#", onClick }) => {
  return (
    <Link onClick={onClick} to={href}>
      <button className="btn mt-3 btn-outline-warning rounded-pill btn-lg">
        <div className="d-flex flex-direction-around but gap-3 justify-content-between align-items-center">
          <span>{buttons}</span>
          <span className="ps-3" />
          <span className="p-2 px-3 rounded-circle bg-warning">
            <i className={`fas ${ico} text-black ml-auto`} />
          </span>
        </div>
      </button>
    </Link>
  );
};
