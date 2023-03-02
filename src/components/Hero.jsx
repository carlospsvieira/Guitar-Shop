import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Hero() {
  return (
    <div className="h-screen hero flex flex-col gap-4">
      <h1 className="text-white text-4xl mt-[55%] ml-[10%] mb-[1rem] sm:text-7xl sm:mt-[20%]">
        Acoustic and Electric Guitars
      </h1>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <a
          href="#category"
          className="bg-amber-600
          py-3
          px-10
          rounded-md
          text-white
          text-center
          text-2xl
          font-[500]
          ml-[10%]
          "
        >
          <span>Start Shopping</span>
        </a>
      </AnimationOnScroll>
    </div>
  );
}

export default Hero;
