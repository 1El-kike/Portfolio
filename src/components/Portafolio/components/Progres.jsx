import React from "react";

const LANGUAGES = [
  ["HTML", 65, "43f94a"],
  ["CSS", 70, "2ccde9"],
  ["JAVASCRIPT", 85, "fb297b"],
  ["REACT", 80, "ffe047"],
  ["NODE JS", 60, "fff"],
  ["MYSQL", 78, "ab24ec"],
  ["TYPESCRIPT", 80, "f16428"],
  ["REACT'Native", 55, "f82c14"],
];

export const Progres = () => {
  return (
    <>
      {LANGUAGES.map(([name, percent, color], idx) => (
        <div key={idx} className="col-md-6 col-lg-3 ml-0 mt-3 mb-3 flex-wrap">
          <div
            className="progress-circle"
            style={{ "--clr": `#${color}`, "--i": `${percent}` }}
          >
            <div
              className="progress-value"
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin="0"
            >
              {percent}%
            </div>
            <div className="texto">{name}</div>
          </div>
        </div>
      ))}
    </>
  );
};
