import Link from "next/link";
import React from "react";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="text-[#1f2937]">
      <div className="mx-auto w-full h-screen justify-center flex mt-[-96px] max-w-[800px] text-center flex-col">
        <p className="font-bold md:text-4xl sm:text-3xl text-2xl md:py-6">
          Project management for your needs
        </p>
        <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl md:py-6">
          Keep track of your tickets and bugs
        </h1>
        <Link href="/dashboard">
          <button className="bg-sky-400 w-[200px] rounded-md my-6 mx-auto px-7 font-medium py-3 text-white hover:bg-sky-700">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
