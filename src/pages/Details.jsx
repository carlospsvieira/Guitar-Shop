import React from "react";
import { Link, useLocation } from "react-router-dom";
import CustomBtn from "../components/CustomBtn";
import { guitars } from "../data";

function Details() {
  const location = useLocation();
  const guitarId = location.pathname.split("/")[2];
  const guitar = guitars.find((guitar) => guitar.id === guitarId);
  return (
    <div>
      <img src={guitar.image} alt="" className="w-[200px]"/>
      <CustomBtn productId={guitar.id} />
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default Details;
