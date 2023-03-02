import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";
import FavoriteBtn from "../components/FavoriteBtn";
import { guitars } from "../data";
import onSale from '../images/on-sale.jpg'

function Details() {
  const location = useLocation();
  const guitarId = location.pathname.split("/")[2];
  const guitar = guitars.find((guitar) => guitar.id === guitarId);
  return (
    <div className="h-screen flex flex-wrap justify-center items-center gap-8">
      <div className="flex flex-col items-center justify-end gap-4 pb-8 shadow-lg w-[600px]">
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
      <div className="on-sale flex justify-center shadow-lg">
        <span className="absolute pt-[5rem] font-bold text-2xl">This product's now 20% OFF!!</span>
        <span className="absolute pt-[8rem]">Claim this cupom at checkout: GSHOP20</span>
        <img src={onSale} alt="on-sale" className="h-[600px] w-[500px] rounded-lg"/>
      </div>
    </div>
  );
}

export default Details;
