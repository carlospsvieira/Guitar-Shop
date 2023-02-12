import React, { useContext, useState } from "react";
import { Context } from "../context/AddProvider";

function CustomBtn({ productId }) {
  const { cart, setCart } = useContext(Context);
  const [btnText, setBtnText] = useState("+Cart");
  console.log(cart)

  const btnTextChange = () => {
    if (btnText === "+Cart") {
      setBtnText("Added");
    } else {
      setBtnText("+Cart");
    }
  };

  const addToCart = () => {
    const existingId = cart.find((id) => id === productId)
    const removeFromList = cart.filter((id) => id !== productId)
    if (existingId) {
      setCart(removeFromList);
    } else {
      setCart((prev) => [...prev, productId]);
    }
  }

  const handleAdd = () => {
    addToCart()
    btnTextChange();
  };

  return (
    <div>
      <button onClick={handleAdd}>
        {btnText}
      </button>
    </div>
  );
}

export default CustomBtn;
