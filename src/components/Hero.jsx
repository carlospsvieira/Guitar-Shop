import React from "react";

function Hero() {
  return (
    <div className="h-screen hero flex flex-col">
      <h1 className="text-white text-5xl mt-[55%] ml-[10%] sm:text-7xl sm:mt-[20%]">
        Acoustic and Electric Guitars
      </h1>
      <a
        href="#category"
        className="bg-amber-500
          py-4
          rounded-md
          text-white
          font-bold
          text-center
          text-2xl
          w-[250px]
          mt-1
          ml-[10%]
          "
      >
        <span>Start Shopping</span>
      </a>
    </div>
  );
}

export default Hero;
