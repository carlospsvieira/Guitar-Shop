import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { guitars } from "../data";
import CustomBtn from "./CustomBtn";
import FavoriteBtn from "./FavoriteBtn";
import Filtered from "./Filtered";

function GuitarList() {
  const [filtered, setFiltered] = useState(false);
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
    setBrand("All")
    setFiltered(false)
  }

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
      <div className="flex flex-wrap justify-center gap-[2rem] items-end">
        {!filtered ? (
          guitarList.map((guitar) => (
            <div
              key={guitar.id}
              className="flex flex-col w-[250px] gap-2 items-center"
            >
              <div>
                <img src={guitar.image} alt="" className="w-[200px] mb-2" />
                <p>{guitar.name}</p>
                <p>{guitar.shortDescription}</p>
                <p className="text-zinc-600">{`$${guitar.price}`}</p>
              </div>
              <div className="flex gap-4">
                <Link
                  to={`${location.pathname}/${guitar.id}`}
                  className="bg-zinc-800 w-[100px] text-center text-white text-sm rounded-md py-1 px-2"
                >
                  View Guitar
                </Link>
                <CustomBtn productId={guitar.id} />
                <FavoriteBtn productId={guitar.id} />
              </div>
            </div>
          ))
        ) : (
          <Filtered brand={brand} />
        )}
      </div>
      {/* Links to both electric or acoustic page depending on current pathname */}
      <div className="mt-3">
        {location.pathname === "/acoustic" ? (
          <Link
            to="/electric"
            onClick={ switchGuitarType }
            className="bg-red-400 rounded-md px-2 py-1"
          >
            See our electric guitars
          </Link>
        ) : (
          <Link
            to="/acoustic"
            onClick={ switchGuitarType }
            className="bg-sky-500 rounded-md px-2 py-1"
          >
            See our acoustic guitars
          </Link>
        )}
      </div>
    </div>
  );
}

export default GuitarList;
