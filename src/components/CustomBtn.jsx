import React, { useContext, useState } from "react";
import { Context } from "../context/AddProvider";

function CustomBtn({ productId }) {
  const { cart, setCart } = useContext(Context);
  const [btnText, setBtnText] = useState("Add");

  // changes btn text on click back and forth //
  const btnTextChange = () => {
    if (btnText === "Add") {
      setBtnText("Added");
    } else {
      setBtnText("Add");
    }
  };

  // adds target id to cart //
  const addToCart = () => {
    const existingId = cart.find((id) => id === productId);
    const removeFromList = cart.filter((id) => id !== productId);
    if (existingId) {
      setCart(removeFromList);
    } else {
      setCart((prev) => [...prev, productId]);
    }
  };

  const handleAdd = () => {
    addToCart();
    btnTextChange();
  };

  return (
    <div>
      <button onClick={handleAdd}>{btnText}</button>
    </div>
  );
}

export default CustomBtn;
