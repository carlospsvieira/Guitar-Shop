import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AddProvider";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";

function CustomBtn({ productId }) {
  const { setCart } = useContext(Context);
  const [btnText, setBtnText] = useState(false);

  // handles btn previous btn text when page is reloaded //
  const handleBtnText = () => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    const existingId = storage?.find((id) => id === productId);
    if (existingId) {
      setBtnText(true);
    } else {
      setBtnText(false);
    }
  };

  // adds and removes ids to localStorage
  const handleStorage = () => {
    let storage = JSON.parse(localStorage.getItem("cart"));
    // checks for ids in localStorage
    if (!storage) {
      storage = [];
    } else if (storage.some((id) => id === productId)) {
      const keptItems = storage.filter((id) => id !== productId);
      return localStorage.setItem("cart", JSON.stringify(keptItems));
    }
    // adds id to local storage //
    storage.push(productId);
    localStorage.setItem("cart", JSON.stringify(storage));
  };

  // adds and removes target id to cart //
  const handleCart = () => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    setCart(storage);
  };

  const handleClick = () => {
    handleStorage();
    handleBtnText();
    handleCart();
  };

  useEffect(() => {
    handleBtnText();
  }, []);

  return (
      <button onClick={handleClick} className="text-2xl">
        {!btnText ? <BsCartPlus /> : <BsFillCartCheckFill className="text-cyan-600"/>}
      </button>
  );
}

export default CustomBtn;
