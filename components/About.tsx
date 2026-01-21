import Image from "next/image";
import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-12 bg-[#1A1A1A] w-screen py-10 md:py-20 justify-between items-center gap-20">
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-xl md:text-3xl font-bold text-[#D4AF38] capitalize">about</p>
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-base md:text-xl font-normal text-white">
              As a dedicated Assistant Director with over three years of
              professional experience, I specialize in bridging the creative
              vision with practical execution on film sets.
            </p>
            <p className="text-base md:text-xl font-normal text-white">
              My expertise lies in meticulous attention to detail, seamless
              coordination between departments, and fostering collaborative
              environments that enable directors and cinematographers to focus
              on their creative storytelling while ensuring productions run
              smoothly and efficiently.
            </p>
          </div>
          <div className="flex justify-between items-center mt-4 mx-0 md:mx-4">
            <div className="flex flex-col gap-2">
                <p className="text-[#D4AF38] text-2xl md:text-4xl font-bold text-center">
                <AnimatedCounter from={0} to={15} />+</p>
                <p className="text-white text-lg md:ttext-2xl font-medium capitalize text-center">projects completed</p>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[#D4AF38] text-2xl md:text-4xl font-bold text-center"><AnimatedCounter from={0} to={3} />+</p>
                <p className="text-white text-lg md:text-2xl font-medium capitalize text-center">years experience</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full hidden lg:block">
            <Image src="/img/dtg.jpeg" alt="profile" fill className="object-cover" />
        </div>
      </div>
    </>
  );
};

export default About;
