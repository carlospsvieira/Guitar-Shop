import React from "react";

function Hero() {
  return (
    <div className="h-screen hero flex flex-col">
      <h1 className="text-white text-5xl mt-[55%] ml-[10%] sm:text-5xl sm:mt-[20%]">Acoustic and Electric Guitars</h1>
      <a
        href="#category"
        className="bg-amber-500
          py-2
          rounded-sm
          text-white
          font-bold
          text-center
          text-xl
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
