import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";
import { BsCartX } from "react-icons/bs"

function Cart() {
  const { cart, setCart, user } = useContext(Context);
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();
  const newList = guitars.filter((guitar) =>
    cart?.map((id) => id).includes(guitar.id)
  );
  const pricing = newList.map((guitar) => guitar.price);

  const handleCart = () => {
    const storage = JSON.parse(localStorage.getItem("cart"));

    if (!storage || storage.length === 0) {
      setEmpty(true);
    } else {
      setCart(storage);
    }
    return;
  };

  const handleRemoveItem = (productId) => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    const removeList = storage?.filter((id) => id !== productId);

    localStorage.setItem("cart", JSON.stringify(removeList));
    setCart(removeList);

    return cart.length === 1 ? setEmpty(true) : setEmpty(false);
  };

  const redirectCheckout = () => {
    user && user.email.length > 0 ? navigate("/checkout") : navigate("/login");
  };

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <div className="h-screen">
      <h1>Cart</h1>
      {empty ? (
        <p>Your cart is empty.</p>
      ) : (
        newList.map((guitar) => (
          <div key={guitar.id}>
            <img src={guitar.image} alt="" className="w-[100px]" />
            <p>{`$${guitar.price}`}</p>
            <button onClick={() => handleRemoveItem(guitar.id)}><BsCartX size={20} className="text-red-700"/></button>
          </div>
        ))
      )}
      <div>
        <p>Total: ${pricing.reduce((acc, price) => {
          const total = acc + price;
          return total
        }, 0).toFixed(2)}</p>
      </div>
      <div>
        <button onClick={redirectCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
