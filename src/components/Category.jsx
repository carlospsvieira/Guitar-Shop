import React from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Category() {
  return (
    <section
      id="category"
      className="flex flex-col items-center pt-[10rem] gap-16 h-screen"
    >
      <div>
        <h1 className="text-5xl">Your choice is what makes us safe & sound.</h1>
      </div>
      <AnimationOnScroll animateIn="animate__fadeIn">
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
      </AnimationOnScroll>
    </section>
  );
}

export default Category;
