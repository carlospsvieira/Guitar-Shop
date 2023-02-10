import { createContext, useMemo, useState } from "react";

export const Context = createContext();

function AddProvider({ children }) {
  const [addBtn, setAddBtn] = useState("+Cart");

  const value = useMemo(
    () => ({
      addBtn,
      setAddBtn,
    }),
    [addBtn, setAddBtn]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default AddProvider;
