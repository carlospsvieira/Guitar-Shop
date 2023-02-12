import { createContext, useMemo, useState } from "react";

export const Context = createContext();

function AddProvider({ children }) {
  const [cart, setCart] = useState([]);

  const value = useMemo(
    () => ({
      cart,
      setCart,
    }),
    [cart, setCart]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default AddProvider;
