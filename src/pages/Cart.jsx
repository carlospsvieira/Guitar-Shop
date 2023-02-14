import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";

function Cart() {
  const { cart, setCart, user } = useContext(Context);
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();
  const newList = guitars.filter((guitar) =>
    cart?.map((id) => id).includes(guitar.id)
  );

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
    user.email.length > 0 ? navigate("/checkout") : navigate("/login");
  };

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {empty ? (
        <p>Your cart is empty.</p>
      ) : (
        newList.map((guitar) => (
          <div key={guitar.id}>
            <img src={guitar.image} alt="" className="w-[100px]" />
            <button onClick={() => handleRemoveItem(guitar.id)}>Remove</button>
          </div>
        ))
      )}
      <div>
        <button onClick={redirectCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
