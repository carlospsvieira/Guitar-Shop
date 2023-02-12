import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";

function Cart() {
  const { cart, setCart } = useContext(Context);
  const [empty, setEmpty] = useState(false);
  const newList = guitars.filter((guitar) =>
    cart?.map((id) => id).includes(guitar.id)
  );

  const handleCart = () => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    if (!storage) {
      setEmpty(true);
    } else {
      setCart(storage);
    }
    return;
  };

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {empty
        ? <p>Your cart is empty.</p>
        : newList.map((guitar) => (
            <div key={guitar.id}>
              <img src={guitar.image} alt="" className="w-[100px]" />
            </div>
          ))}
    </div>
  );
}

export default Cart;
