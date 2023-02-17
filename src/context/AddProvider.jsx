import { createContext, useMemo, useState } from "react";

export const Context = createContext();

function AddProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [filtered, setFiltered] = useState(false);
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
      filtered,
      setFiltered,
    }),
    [cart, setCart, user, setUser, favorite, setFavorite, filtered, setFiltered]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddProvider;
