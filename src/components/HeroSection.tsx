import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col py-10">
      <h1 className="text-7xl font-bold pb-4">Master the Art of Music</h1>
      <p className=" w-[35%] text-center leading-6">
        Drive into our conperehantion music cource and Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum tempore itaque dolores nulla neque, necessitatibus beatae culpa est.
        Voluptate, sayanis good
      </p>
      <button classNamel="mt-4">
        <Link href={"#"}>Courses</Link>
      </button>
    </div>
  );
};

export default HeroSection;
