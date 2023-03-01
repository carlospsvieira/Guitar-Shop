import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";
import FavoriteBtn from "../components/FavoriteBtn";
import { guitars } from "../data";

function Details() {
  const location = useLocation();
  const guitarId = location.pathname.split("/")[2];
  const guitar = guitars.find((guitar) => guitar.id === guitarId);
  return (
    <div className="flex justify-center pt-[5rem] h-screen">
      <div className="flex flex-col items-center pt-[5rem] gap-4 pb-8 shadow-lg h-[700px] w-[500px]">
        <img src={guitar.image} alt="" className="w-[300px]" />
        <span className="font-bold text-lg">{guitar.name}</span>
        <span className="w-[350px] text-center">{guitar.longDescription}</span>
        <span className="text-zinc-600">{`$${guitar.price}`}</span>
        <div className="flex gap-4">
          <CustomBtn productId={guitar.id} />
          <FavoriteBtn productId={guitar.id} />
        </div>
        <div>
          <Link
            to="/cart"
            className="bg-zinc-800 text-center text-white text-sm rounded-md py-2 px-4"
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
