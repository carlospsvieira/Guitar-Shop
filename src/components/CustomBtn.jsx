import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/AddProvider";

function CustomBtn({ productId }) {
  const { setCart } = useContext(Context);
  const [btnText, setBtnText] = useState("Add");

  // changes btn text on click back and forth //
  const btnTextChange = () => {
    if (btnText === "Add") {
      setBtnText("Added");
    } else {
      setBtnText("Add");
    }
  };

  // handles btn previous btn text when page is reloaded //
  const handleBtnText = () => {
    const storage = JSON.parse(localStorage.getItem("cart"));
    const existingId = storage?.find((id) => id === productId);
    if (existingId) {
      setBtnText("Added");
    } else {
      setBtnText("Add");
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
    btnTextChange();
    handleCart();
  };

  useEffect(() => {
    handleBtnText();
  }, []);

  return (
    <div>
      <button onClick={handleClick}>{btnText}</button>
    </div>
  );
}

export default CustomBtn;
