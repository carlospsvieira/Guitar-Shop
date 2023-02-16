import React from "react";
import { Link, useLocation } from "react-router-dom";
import { guitars } from "../data";
import CustomBtn from "./CustomBtn";
import FavoriteBtn from "./FavoriteBtn";

function GuitarList() {
  const location = useLocation();

  // it gets guitar list based on pathname (acoustic or electric) //
  const guitarList = guitars.filter(
    (guitar) => guitar.type === location.pathname.substring(1)
  );

  return (
    <div className="m-2">
      <div className="flex flex-wrap justify-center gap-[2rem]">
        {guitarList.map((guitar) => (
          <div key={guitar.id} className="flex flex-col w-[250px]">
            <div>
              <img src={guitar.image} alt="" className="w-[200px]" />
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
        ))}
      </div>
      {/* Links to both electric or acoustic page depending on current pathname */}
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
