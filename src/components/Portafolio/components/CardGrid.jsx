import React from "react";

export const CardGrid = ({ entries = [], width }) => (
  <>
    {entries.map((item, i) => (
      <div
        key={i}
        style={{ paddingRight: width > 350 ? 20 : 0 }}
        className="lg:w-1/3 md:w-1/2 sm:w-full pb-4"
      >
        <div className="bg-gray-900">
          <img src={item[0]} className="w-full" alt="" />
          <div className="border-t-4 border-yellow-500 p-4">
            <h5 className="text-white">{item[1]}</h5>
          </div>
          <div className="p-3">
            <small className="text-gray-400">{item[2]}</small>
          </div>
        </div>
      </div>
    ))}
  </>
);
