import React from "react";
import { Link, useLocation } from "react-router-dom";
import { guitars } from "../data";

function GuitarList() {
  const location = useLocation();
  const guitarList = guitars.filter(
    (guitar) => guitar.type === location.pathname.substring(1)
  );
  console.log(guitarList);

  return (
    <div className="m-2">
      <div className="flex flex-wrap justify-center">
        {guitarList.map((guitar) => (
          <div className="flex flex-col justify-center">
            <div>
              <img src={guitar.image} alt="" className="w-[200px]" />
            </div>
            <div className="flex">
              <Link
                to={`${location.pathname}/${guitar.id}`}
                className="bg-zinc-800 w-[100px] text-center text-white text-sm rounded-md py-1 px-2"
              >
                View Guitar
              </Link>
              <Link to="/cart" className="bg-amber-400 px-2 py-1 rounded-sm">Cart</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        {location.pathname === "/acoustic" ? (
          <Link to="/electric" className="bg-red-400 rounded-md px-2 py-1">
            See our electric guitars
          </Link>
        ) : (
          <Link to="/acoustic" className="bg-sky-500 rounded-md px-2 py-1">
            See our acoustic guitars
          </Link>
        )}
      </div>
    </div>
  );
}

export default GuitarList;
