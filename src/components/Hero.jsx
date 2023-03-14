import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div className="h-[80vh] sm:h-screen hero flex flex-col gap-4">
      <h1 className="text-black text-[4rem] text-center sm:text-[12rem] sm:font-extralight mt-[10rem] sm:ml-[10%] sm:text-start">
        GUITARS
      </h1>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <Link
          activeClass="active"
          to="category"
          spy={true}
          duration={500}
          className="bg-amber-600
        py-3
        rounded-md
        text-white
        text-center
        text-xl
        font-[500]
        ml-[4rem]
        sm:ml-[10%]
        cursor-pointer
        px-[3rem]
        sm:px-[17.5rem]
        sm:text-2xl
        "
        >
          Start Shopping
        </Link>
      </AnimationOnScroll>
    </div>
  );
}

export default Hero;
