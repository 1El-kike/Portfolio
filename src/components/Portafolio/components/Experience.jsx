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
  <>
    {data.map((ele, idx) => (
      <ul className="nav mb-3" key={idx}>
        <li>
          <div className="flex">
            <div className="flex flex-col ">
              <i className="fas fa-briefcase rounded-full bg-yellow-500 p-3 m-1" />
              <span className="border-l-2 border-gray-700 flex ml-auto mr-auto h-full" />
            </div>

            <div className="flex  flex-col justify-start ">
              <div className="flex w-auto">
                <p
                  className="m-2 ms-3 mt-1 p-1 ps-3 px-3 rounded w-2"
                  style={{ background: "rgb(19, 44, 57)" }}
                >
                  {ele[3]}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1">
                <h3 className="m-2 ms-3">{ele[0]}</h3>
                <span className="h-px w-16 border-b-4 border-gray-600 rounded" />
                <h6 className="m-2 ms-3">{ele[1]}</h6>
              </div>
              <p className="m-2 ms-3">{ele[2]}</p>
            </div>
          </div>
        </li>
      </ul>
    ))}
  </>
);

export const Experience = () => (
  <>
    <div className="w-full md:w-full lg:w-1/2 sm:w-full">
      <ItemList data={EXP_DATA.exp1} />
    </div>
    <div className="w-full md:w-full lg:w-1/2 sm:w-full ">
      <ItemList data={EXP_DATA.exp2} />
    </div>
  </>
);
