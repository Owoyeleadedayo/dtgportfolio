import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex w-screen h-full lg:h-screen flex-col bg-black py-10 md:py-20 px-8 md:px-8 lg:px-25 gap-8"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-2xl md:text-4xl font-bold text-[#D4AF38] capitalize text-center">
          Let's Create Together
        </p>
        <p className="max-w-3xl text-base md:text-xl text-white text-center">
          Ready to bring your next film project to life? Let's discuss how we
          can collaborate to create something extraordinary.
        </p>
      </div>

      <div className="flex flex-col p-6 bg-[#1A1A1A] mx-auto rounded-xl border border-gray-300/20"></div>
    </div>
  );
};

export default Contact;
