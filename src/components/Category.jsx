import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div
      id="category"
      className="flex flex-col items-center pt-[10%] gap-16 h-screen bg-slate-100"
    >
      <div>
        <h1 className="text-5xl">Your choice is what makes us safe & sound.</h1>
      </div>
      <div className="flex gap-8 category-btns">
        <Link to="acoustic" className="w-[fit-content]">
          <div className="acoustic-btn">
            <span>Acoustic</span>
          </div>
        </Link>
        <Link to="electric" className="w-[fit-content]">
          <div className="electric-btn">
            <span>Electric</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
