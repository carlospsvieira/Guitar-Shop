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
    <div className="flex flex-col items-center gap-4">
      <img src={guitar.image} alt="" className="w-[300px]" />
      <span>{guitar.name}</span>
      <span className="w-[350px] text-justify">{guitar.longDescription}</span>
      <span className="text-zinc-600">{`$${guitar.price}`}</span>
      <div className="flex gap-4">
        <CustomBtn productId={guitar.id} />
        <FavoriteBtn productId={guitar.id} />
      </div>
      <div>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
}

export default Details;
