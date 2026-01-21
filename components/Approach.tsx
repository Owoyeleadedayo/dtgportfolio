"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const Approach = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-screen h-full flex-col bg-black py-10 md:py-20 px-8 md:px-8 lg:px-25 gap-30">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl md:text-3xl font-bold text-[#D4AF38] capitalize">
          Collaboration Approach
        </h1>
        <p className="text-white text-xl font-medium">
          My philosophy centers on creating an environment where creative vision
          and practical execution seamlessly merge, enabling every team member
          to contribute their best work.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex justify-center gap-4">
            <div className="flex bg-[#3F3415] items-center justify-start w-6 h-6 rounded-full border border-[#D4AF38] p-1 mt-1">
              <Check color="#D4AF38" />
            </div>
            <div className="flex flex-col">
              <p className="text-white font-medium text-lg">
                Clear Communication
              </p>
              <p className="text-white font-normal text-base">
                Establishing transparent communication channels across all
                departments to ensure unified execution of creative vision.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex bg-[#3F3415] items-center justify-start w-6 h-6 rounded-full border border-[#D4AF38] p-1 mt-1">
              <Check color="#D4AF38" />
            </div>
            <div className="flex flex-col">
              <p className="text-white font-medium text-lg">
                Adaptive Problem-Solving
              </p>
              <p className="text-white font-normal text-base">
                Quick identification and resolution of production challenges
                while maintaining creative integrity and project momentum.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex bg-[#3F3415] items-center justify-start w-6 h-6 rounded-full border border-[#D4AF38] p-1 mt-1">
              <Check color="#D4AF38" />
            </div>
            <div className="flex flex-col">
              <p className="text-white font-medium text-lg">
                Shared Creative Goals
              </p>
              <p className="text-white font-normal text-base">
                Aligning diverse professionals toward common creative and
                production objectives for exceptional storytelling outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[500px] h-[500px] rounded-xl hidden lg:block">
        <Image
          src="/img/pro.jpeg"
          alt="profile"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Approach;
