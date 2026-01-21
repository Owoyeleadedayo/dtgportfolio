"use client";
import StarBackground from "@/components/StarBackground";
import About from "@/components/About";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <>
      <StarBackground className="relative w-screen h-screen overflow-hidden" />
      
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen md:px-20 px-5 flex flex-col items-center justify-center gap-4">
        <h1 className="text-white text-4xl lg:text-6xl">
          HI, MY NAME IS <span className="text-[#D4AF38]">DANIEL ALAUKWU.</span>
        </h1>
        <h4 className="text-white text-center max-w-4xl">
          I am an Assistant Director[A.D] with over 3+ years of professional experience collaborating with directors, cinematographers, and production crews to bring extraordinary stories to life on screen.
        </h4>
      </div>

      <About />
      <Skills />
    </>
  );
};

export default HomePage;
