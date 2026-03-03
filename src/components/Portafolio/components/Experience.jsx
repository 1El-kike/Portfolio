import React from "react";

const EXP_DATA = {
  exp1: [
    [
      "WEB DEVELOPER ",
      "ENVATO",
      "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore  adipisicing elit",
      "2022 - PRESENTE",
    ],
    [
      "UI/UX DESIGNER ",
      "THEMEFOREST",
      "Lorem incididunt sit amet, consectetur eiusmod dunt doidunt dot elit, tempor incididunt",
      "2020-2023",
    ],
    [
      "CONSULTANT ",
      "ENVATO",
      "Lorem ipsum dolor sit amet,tempor incididunt ut laboreconsectetur elit  sed do eismed tempor dunt",
      "2018-2023",
    ],
  ],
  exp2: [
    [
      "ENGINEERING ",
      "OXFORD UNIVERSITY",
      "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
      "2022",
    ],
    [
      "MASTER DEGREE ",
      "KIEV UNIVERSITY",
      "Lorem incididunt sit amet, consectetur eiusmod dunt doidunt dot elit, tempor incididunt",
      "2023",
    ],
    [
      "BACHELOR  ",
      "TUNIS HIGH ACKOOL",
      "Lorem ipsum dolor sit amet,tempor incididunt ut laboreconsectetur elit  sed do eismed tempor dunt",
      "2021",
    ],
  ],
};

const ItemList = ({ data }) => (
  <div className="grid auto-rows-max gap-3">
    {data.map((ele, idx) => (
      <div key={idx} className="grid grid-cols-[auto_1fr] gap-4 items-start">
        {/* Icon Column */}
        <div className="flex flex-col items-center">
          <i className="fas fa-briefcase rounded-full bg-yellow-500 p-3" />
          <span className="border-l-2 border-gray-700 flex-1 w-0.5 mt-2" />
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-start pt-1">
          <div className="flex mb-2">
            <p
              className="px-3 py-1 rounded text-sm"
              style={{ background: "rgb(19, 44, 57)" }}
            >
              {ele[3]}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-semibold text-white">{ele[0]}</h3>
            <span className="h-1 w-12 border-b-4 border-gray-600 rounded" />
            <h6 className="text-gray-300 text-sm">{ele[1]}</h6>
          </div>
          <p className="text-gray-400 text-sm">{ele[2]}</p>
        </div>
      </div>
    ))}
  </div>
);

export const Experience = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div>
      <ItemList data={EXP_DATA.exp1} />
    </div>
    <div>
      <ItemList data={EXP_DATA.exp2} />
    </div>
  </div>
);
