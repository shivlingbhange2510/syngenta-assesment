import React from "react";
import { circleData } from "../Mockdata/Circledata";
export const Circle = () => {
  return (
    <div>
      Circle
      {circleData.map((item, index) => {
        return (
          <>
            <div
              className="circle"
              style={{ backgroundColor: `${item.color}` }}
            ></div>
          </>
        );
      })}
    </div>
  );
};
