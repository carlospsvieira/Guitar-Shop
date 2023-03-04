import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { TbDiscount2 } from "react-icons/tb";

function Hero() {
  return (
    <div className="h-screen hero flex flex-col gap-4">
      <h1 className="text-white text-4xl ml-[10%] mb-[0.5rem] mt-[10rem] sm:text-7xl sm:mt-[20rem]">
        Acoustic and Electric Guitars
      </h1>
      <div className="flex flex-col">
        <p className="text-xl font-[500] ml-[10%] sm:text-3xl mb-2">
          Big Sale Today
        </p>
        <div className="flex mb-4">
          <p className="text-2xl font-[500] ml-[10%] sm:text-4xl">
            Guitars 20% OFF!
          </p>
          <TbDiscount2 size={25} color="white" />
        </div>
      </div>
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
