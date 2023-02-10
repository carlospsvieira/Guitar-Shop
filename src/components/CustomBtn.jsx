import React, { useContext } from "react";
import { Context } from "../context/AddProvider";

function CustomBtn() {
  const { addBtn, setAddBtn } = useContext(Context);

  const btnTextChange = () => {
    if (addBtn === "+Cart") {
      setAddBtn("Added");
    } else {
      setAddBtn("+Cart");
    }
  }

  const handleAdd = () => {
    btnTextChange();
  };

  return (
    <div>
      <button onClick={handleAdd}>{addBtn}</button>
    </div>
  );
}

export default CustomBtn;
