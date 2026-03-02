import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ buttons, ico, href = "#", onClick }) => {
  return (
    <Link onClick={onClick} to={href}>
      <div className="mt-3 border-2 text-white border-yellow-500 rounded-full px-2 py-1 lg:text-lg md:text-base hover:bg-yellow-500 hover:text-black transition">
        <div className="flex gap-3 justify-between items-center relative">
          <span>{buttons}</span>
          <span className="ps-3" />
          <span className="p-2 px-3 rounded-full bg-yellow-500">
            <i className={`fas ${ico} text-black `} />
          </span>
        </div>
      </div>
    </Link>
  );
};
