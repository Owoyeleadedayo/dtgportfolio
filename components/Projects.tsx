import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex w-screen h-full flex-col bg-[#1A1A1A] py-10 md:py-20 px-8 md:px-8 lg:px-12 gap-8"
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-2xl md:text-4xl font-bold text-[#D4AF38] capitalize text-center">
          Featured Projects
        </p>
        <p className="max-w-3xl text-base md:text-xl text-white text-center">
          Selected film productions showcasing collaborative excellence and
          creative execution
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
        <Card className="relative w-full bg-[#1A1A1A] max-w-sm pt-0 rounded-2xl border border-[#D4AF38]">
          <div className="absolute inset-0 z-30 rounded-t-2xl aspect-video bg-grey/35 border border-[#D4AF38] overflow-hidden" />
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="https://img.youtube.com/vi/tj-IxVFUiJY/hqdefault.jpg"
              alt="Event cover"
              className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-white font-semibold text-2xl">
              ZICA ZOE - CRAZY THINGS
            </CardTitle>
            <div className="flex flex-col gap-2">
              <p className="text-white text-base font-semibold">
                Music Video | 2024
              </p>
              <p className="text-white text-base font-medium">
                Responsible for daily scheduling and ensuring seamless
                collaboration between cinematography and sound departments.
              </p>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              asChild
              className="w-full border border-[#D4AF38] text-white text-base cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105"
            >
              <a
                href="https://youtu.be/tj-IxVFUiJY"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Event
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative w-full bg-[#1A1A1A] max-w-sm pt-0 rounded-2xl border border-[#D4AF38]">
          <div className="absolute inset-0 z-30 rounded-t-2xl aspect-video bg-grey/35 border border-[#D4AF38] overflow-hidden" />
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg"
              alt="Event cover"
              className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-white font-semibold text-2xl">
              LLONA - DEAD FLOWERS
            </CardTitle>
            <div className="flex flex-col gap-2">
              <p className="text-white text-base font-semibold">
                Music Video | 2024
              </p>
              <p className="text-white text-base font-medium">
                Responsible for daily scheduling and ensuring seamless
                collaboration between cinematography and sound departments.
              </p>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              asChild
              className="w-full border border-[#D4AF38] text-white text-base cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105"
            >
              <a
                href="https://youtu.be/watch?v=vGjOdwCOQN"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Event
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative w-full bg-[#1A1A1A] max-w-sm pt-0 rounded-2xl border border-[#D4AF38]">
          <div className="absolute inset-0 z-30 rounded-t-2xl aspect-video bg-grey/35 border border-[#D4AF38] overflow-hidden" />
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="https://img.youtube.com/vi/4zTeu-jX1pg/hqdefault.jpg"
              alt="Event cover"
              className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-white font-semibold text-2xl">
              ZICA ZOE - DEM GO HEAR
            </CardTitle>
            <div className="flex flex-col gap-2">
              <p className="text-white text-base font-semibold">
                Music Video | 2025
              </p>
              <p className="text-white text-base font-medium">
                Responsible for daily scheduling and ensuring seamless
                collaboration between cinematography and sound departments.
              </p>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              asChild
              className="w-full border border-[#D4AF38] text-white text-base cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105"
            >
              <a
                href="https://youtu.be/watch?v=4zTeu-jX1pg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Event
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative w-full bg-[#1A1A1A] max-w-sm pt-0 rounded-2xl border border-[#D4AF38]">
          <div className="absolute inset-0 z-30 rounded-t-2xl aspect-video bg-grey/35 border border-[#D4AF38] overflow-hidden" />
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="https://img.youtube.com/vi/HhmiOoYEKTM/hqdefault.jpg"
              alt="Event cover"
              className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-white font-semibold text-2xl">
            Bloodline Of Grace
            </CardTitle>
            <div className="flex flex-col gap-2">
              <p className="text-white text-base font-semibold">
                Music Video | 2025
              </p>
              <p className="text-white text-base font-medium">
                Responsible for daily scheduling and ensuring seamless
                collaboration between cinematography and sound departments.
              </p>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              asChild
              className="w-full border border-[#D4AF38] text-white text-base cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105"
            >
              <a
                href="https://www.youtube.com/watch?v=HhmiOoYEKTM"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Event
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative w-full bg-[#1A1A1A] max-w-sm pt-0 rounded-2xl border border-[#D4AF38]"> 
          <div className="absolute inset-0 z-30 rounded-t-2xl aspect-video bg-grey/35 border border-[#D4AF38] overflow-hidden" />
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="https://img.youtube.com/vi/6rDBjdBjYCg/hqdefault.jpg"
              alt="Event cover"
              className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-white font-semibold text-2xl">
            TOP TEA NIGERIA
            </CardTitle>
            <div className="flex flex-col gap-2">
              <p className="text-white text-base font-semibold">
                Music Video | 2025
              </p>
              <p className="text-white text-base font-medium">
                Responsible for daily scheduling and ensuring seamless
                collaboration between cinematography and sound departments.
              </p>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              asChild
              className="w-full border border-[#D4AF38] text-white text-base cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105"
            >
              <a
                href="https://www.youtube.com/watch?v=6rDBjdBjYCg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Event
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative w-full bg-[#1A1A1A] max-w-sm pt-0 rounded-2xl border border-[#D4AF38]">
          <div className="absolute inset-0 z-30 rounded-t-2xl aspect-video bg-grey/35 border border-[#D4AF38] overflow-hidden" />
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="https://img.youtube.com/vi/Za6Cc_7IK20/hqdefault.jpg"
              alt="Event cover"
              className="aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </div>

          <CardHeader>
            <CardTitle className="text-white font-semibold text-2xl">
            KIVO CREAMER
            </CardTitle>
            <div className="flex flex-col gap-2">
              <p className="text-white text-base font-semibold">
                Music Video | 2025
              </p>
              <p className="text-white text-base font-medium">
                Responsible for daily scheduling and ensuring seamless
                collaboration between cinematography and sound departments.
              </p>
            </div>
          </CardHeader>
          <CardFooter>
            <Button
              asChild
              className="w-full border border-[#D4AF38] text-white text-base cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105"
            >
              <a
                href="https://www.youtube.com/watch?v=Za6Cc_7IK20"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Event
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
