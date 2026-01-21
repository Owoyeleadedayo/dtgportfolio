import {
  CalendarDays,
  Clapperboard,
  FileText,
  Handshake,
  User,
  Video,
} from "lucide-react";
import React from "react";

const Skills = () => {
  const services = [
    {
      icon: User,
      title: "On-Set Coordination",
      description:
        "Expert management of cast, crew, and equipment logistics to ensure seamless production workflow and timing.",
    },
    {
      icon: CalendarDays,
      title: "Shot Planning & Scheduling",
      description:
        "Meticulous planning and scheduling of shots to optimize time, resources, and creative outcomes.",
    },
    {
      icon: FileText,
      title: "Script Breakdowns",
      description:
        "Comprehensive analysis and breakdown of scripts for efficient production planning and resource allocation.",
    },
    {
      icon: Handshake,
      title: "Team Collaboration",
      description:
        "Facilitating communication and collaboration across all production departments for unified execution.",
    },
    {
      icon: Video,
      title: "Visual Storytelling",
      description:
        "Supporting directors in translating creative vision into compelling visual narratives through strategic planning.",
    },
    {
      icon: Clapperboard,
      title: "Production Management",
      description:
        "Overseeing daily production operations to maintain quality standards and meet project deadlines.",
    },
  ];
  return (
    <div id="expertise" className="flex w-screen h-full lg:h-screen flex-col bg-black py-10 md:py-20 px-8 md:px-8 lg:px-25 gap-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-2xl md:text-4xl font-bold text-[#D4AF38] capitalize text-center">
          Skills & Expertise
        </p>
        <p className="max-w-3xl text-base md:text-xl text-white text-center">
          Comprehensive skill set developed through hands-on experience in
          diverse film productions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 border border-gray-400/30 hover:border-[#D4AF38] transition-colors duration-300 ease-in-out w-full h-full p-6 rounded-md"
          >
            <div className="flex bg-[#3F3415] items-center justify-start w-10 h-10 rounded-full border border-[#D4AF38] p-2">
              <Icon color="#D4AF38" />
            </div>

            <p className="text-white text-xl md:text-2xl font-medium">{title}</p>

            <p className="text-white text-base md:text-lg">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
