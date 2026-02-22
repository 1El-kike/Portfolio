import React from "react";
import { CardGrid } from "../components/CardGrid";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export const BlogSection = ({ entries }) => {
  const width = useWindowWidth();
  return (
    <>
      <div className="col-lg-11 ms-4">
        <div className="d-flex justify-content-between flex-wrap">
          <CardGrid entries={entries} width={width} />
        </div>
      </div>
    </>
  );
};
