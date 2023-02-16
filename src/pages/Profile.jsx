import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data"
import { MdFavorite } from "react-icons/md";
import CustomBtn from "../components/CustomBtn";


function Profile() {
  const { user, favorite, setFavorite } = useContext(Context);
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();
  const newList = guitars.filter((guitar) =>
    favorite?.map((id) => id).includes(guitar.id)
  );

  const handleFavorite = () => {
    const storage = JSON.parse(localStorage.getItem("favorite"));

    if (!storage || storage.length === 0) {
      setEmpty(true);
    } else {
      setFavorite(storage);
    }
    return;
  };

  const handleRemoveItem = (productId) => {
    const storage = JSON.parse(localStorage.getItem("favorite"));
    const removeList = storage?.filter((id) => id !== productId);

    localStorage.setItem("favorite", JSON.stringify(removeList));
    setFavorite(removeList);

    return favorite.length === 1 ? setEmpty(true) : setEmpty(false);
  };

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
    location.reload(true);
  }

  useEffect(() => {
    handleFavorite();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <p>{user.email}</p>
      <h2>Your favorite guitars: </h2>
      {empty ? (
        <p>You don't have a favorite guitar yet.</p>
      ) : (
        newList.map((guitar) => (
          <div key={guitar.id}>
            <img src={guitar.image} alt="" className="w-[100px]" />
            <p>{`$${guitar.price}`}</p>
            <button onClick={() => handleRemoveItem(guitar.id)}> <MdFavorite className="text-red-600"/> </button>
            <CustomBtn />
          </div>
        ))
      )}
      <button onClick={ handleLogout }>Logout</button>
    </>
  );
}

export default Profile;
