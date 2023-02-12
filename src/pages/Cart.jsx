import React, { useContext } from "react";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";

function Cart() {
  const { cart, setCart } = useContext(Context);
  const newList = guitars.filter((guitar) =>
    cart?.map((id) => id).includes(guitar.id)
  );

  return (
    <div>
      <h1>Cart</h1>
      {newList.map((guitar) => (
        <div key={guitar.id}>
          <img src={guitar.image} alt="" className="w-[100px]" />
        </div>
      ))}
    </div>
  );
}

export default Cart;
