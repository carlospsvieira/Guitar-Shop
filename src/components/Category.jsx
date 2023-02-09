import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div id="category" className="h-screen">
      <Link to="acoustic" className="bg-red-400 rounded-md px-2 py-1 mr-2">Acoustic</Link>
      <Link to="electric" className="bg-sky-500 rounded-md px-2 py-1">Electric</Link>
    </div>
  );
}

export default Category;
