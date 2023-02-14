import { createContext, useMemo, useState } from "react";

export const Context = createContext();

function AddProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [user, setUser] = useState({
    email: "",
  });

  const value = useMemo(
    () => ({
      cart,
      setCart,
      user,
      setUser,
      favorite,
      setFavorite,
    }),
    [cart, setCart, user, setUser, favorite, setFavorite]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddProvider;
