import React from "react";

export const Cuadro = ({ num, text }) => (
  <div
    data-aos="flip-left"
    className="border-2 border-yellow-400 rounded w-5/12 mt-2 mb-2"
  >
    <div className="flex">
      <h2 className="font-semibold tracking-widest text-gray-700 text-yellow-500 text-6xl ps-2">
        {num}
      </h2>
      <span className="top-5 mt-1 ms-2 font-semibold tracking-widest text-gray-700 text-yellow-500 text-2xl">
        +
      </span>
    </div>
    <div className="flex overflow-hidden justify-between">
      <span className="h-px w-16 border-b-4 border-gray-600 rounded mx-auto" />
      <div className="">
        <p className="-m-5 p-5 text-white">{text}</p>
      </div>
    </div>
  </div>
);
