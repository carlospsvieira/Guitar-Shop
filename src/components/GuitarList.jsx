import React from "react";
import { useLocation } from "react-router-dom";
import { guitars } from "../data";

function GuitarList() {
  const location = useLocation();
  const guitarList = guitars.filter(
    (guitar) => guitar.type === location.pathname.substring(1)
  );
  console.log(guitarList);

  return (
    <div>
      <div>
        {guitarList.map((guitar) => (
          <p>{guitar.type}</p>
        ))}
      </div>
    </div>
  );
}

export default GuitarList;
