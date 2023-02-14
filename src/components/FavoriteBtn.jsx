import React, { useContext, useState, useEffect } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Context } from "../context/AddProvider";

function FavoriteBtn({productId}) {
  const { setFavorite } = useContext(Context);
  const [heart, setHeart] = useState(false);

  // handles btn previous icon when page is reloaded //
  const handleBtnIcon = () => {
    const storage = JSON.parse(localStorage.getItem("favorite"));
    const existingId = storage?.find((id) => id === productId);
    if (existingId) {
      setHeart(true);
    } else {
      setHeart(false);
    }
  };

  // adds and removes ids to localStorage
  const handleStorage = () => {
    let storage = JSON.parse(localStorage.getItem("favorite"));
    // checks for ids in localStorage
    if (!storage) {
      storage = [];
    } else if (storage.some((id) => id === productId)) {
      const keptItems = storage.filter((id) => id !== productId);
      return localStorage.setItem("favorite", JSON.stringify(keptItems));
    }
    // adds id to local storage //
    storage.push(productId);
    localStorage.setItem("favorite", JSON.stringify(storage));
  };

  // adds and removes target id to favorite //
  const handlefavorite = () => {
    const storage = JSON.parse(localStorage.getItem("favorite"));
    setFavorite(storage);
  };

  const handleClick = () => {
    handleStorage();
    handleBtnIcon()
    handlefavorite();
  };

  useEffect(() => {
    handleBtnIcon();
  }, []);

  return (
    <button onClick={handleClick}>
      {!heart ? <MdFavoriteBorder /> : <MdFavorite className="text-red-600" />}
    </button>
  );
}

export default FavoriteBtn;
