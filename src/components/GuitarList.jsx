import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";
import Filtered from "./Filtered";

function GuitarList() {
  const { setFiltered } = useContext(Context);
  const [brand, setBrand] = useState("All");
  const location = useLocation();

  // it gets guitar list based on pathname (acoustic or electric) //
  const guitarList = guitars.filter(
    (guitar) => guitar.type === location.pathname.substring(1)
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

  const switchGuitarType = () => {
    setBrand("All");
    setFiltered(false);
  };

  return (
    <div className="m-2">
      <label htmlFor="brand">Choose a brand: </label>
      <select name="brand" id="brand" onChange={handleChange}>
        <option value="All">All</option>
        {guitarList.map((guitar, index) => (
          <option key={index} value={guitar.brand}>
            {guitar.brand}
          </option>
        ))}
      </select>
      <div>
        {/* component listing all or filtered guitars */}
        <Filtered brand={brand} />
      </div>
    </div>
  );
}

export default GuitarList;
