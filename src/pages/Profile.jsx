import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/AddProvider";
import { guitars } from "../data";
import { MdFavorite } from "react-icons/md";
import CustomBtn from "../components/CustomBtn";

function Profile() {
  const { user, favorite, setFavorite, setCart } = useContext(Context);
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
    localStorage.clear();
    navigate("/");
    location.reload(true);
  };

  useEffect(() => {
    handleFavorite();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl my-6">Profile</h1>
      <p className="text-xl">{user.email}</p>
      <h2 className="text-lg my-6">Your favorite guitars:</h2>
      <div className="favorite-list h-[400px] rounded-sm px-4">
        {empty ? (
          <p>You don't have any favorite guitars yet.</p>
        ) : (
          newList.map((guitar) => (
            <div
              key={guitar.id}
              className="flex max-w-[500px] h-[100px] items-end justify-between p-4 gap-12 shadow-md"
            >
              <img src={guitar.image} alt="" className="w-[70px]" />
              <Link to={`/${guitar.type}/${guitar.id}`}>
                <p className="font-bold">{guitar.name}</p>
              </Link>
              <p>{`$${guitar.price}`}</p>
              <button onClick={() => handleRemoveItem(guitar.id)}>
                <MdFavorite className="text-red-600" />
              </button>
              <CustomBtn productId={guitar.id} />
            </div>
          ))
        )}
      </div>
      <div className="mt-[5rem]">
        <button
          onClick={handleLogout}
          className="bg-zinc-800 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
