import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";
import GuitarList from "./GuitarList";

function Filter() {
  const { setFiltered } = useContext(Context);
  const [brand, setBrand] = useState("All");
  const location = useLocation();

  // it gets guitar list based on pathname (acoustic or electric) //
  const guitarList = guitars.filter(
    (guitar) => guitar.type === location.pathname.split("/")[2]
  );

  const handleChange = ({ target }) => {
    const { value } = target;
    if (value === "All") {
      setFiltered(false);
    } else {
      setBrand(value);
      setFiltered(true);
    }
  };

  return (
    <div className="px-10">
      <div className="flex justify-center items-center gap-4 my-4 text-xl">
        <label htmlFor="brand">Choose a brand: </label>
        <select name="brand" id="brand" onChange={handleChange}>
          <option value="All">All</option>
          {guitarList.map((guitar, index) => (
            <option key={index} value={guitar.brand}>
              {guitar.brand}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* component listing all or filtered guitars */}
        <GuitarList brand={brand} />
      </div>
    </div>
  );
}

export default Filter;
