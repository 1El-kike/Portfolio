import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

export const Button = ({ buttons, ico, href = "#", onClick }) => {
  return (
    <Link onClick={onClick} to={href} className="no-underline">
      <div className="fancy-btn" role="button">
        <span className="label">{buttons}</span>
        <span className="icon" aria-hidden="true">
          <i className={`fas ${ico}`} />
        </span>
      </div>
    </Link>
  );
};
