import { createContext, useMemo, useState } from "react";

export const Context = createContext();

function AddProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({
    email: "",
  });

  const value = useMemo(
    () => ({
      cart,
      setCart,
      user,
      setUser,
    }),
    [cart, setCart, user, setUser]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddProvider;
