import React from "react";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col py-10">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <h1 className="text-7xl font-bold pb-4">Master the Art of Music</h1>
      <p className=" w-[35%] text-center leading-6 mb-5">
        Drive into our conperehantion music cource and Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsum tempore itaque dolores nulla neque, necessitatibus beatae culpa est.
        Voluptate, sayanis good
      </p>

      <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
        <Link href={"#"}>Courses</Link>
      </Button>
    </div>
  );
};

export default HeroSection;
