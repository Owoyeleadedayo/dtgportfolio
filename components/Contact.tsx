import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

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

      <div className="flex flex-col p-6 bg-[#1A1A1A] mx-auto rounded-xl border border-gray-300/20 gap-2 md:gap-6">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="flex flex-col gap-2">
            <Label className="text-white font-medium text-sm">Name</Label>
            <Input
              type={"text"}
              className="text-white w-xs bg-[#1A1A1A] border border-gray-300/20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-white font-medium text-sm">Email</Label>
            <Input
              type={"email"}
              className="text-white w-xs [#1A1A1A] border border-gray-300/20"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-white font-medium text-sm">Project Type</Label>
          <Select>
            <SelectTrigger className="w-full bg-[#1A1A1A] text-white border border-gray-300/20">
              <SelectValue
                className="text-white font-medium text-sm"
                placeholder="Select Project Type"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-black border border-gray-300/20">
                <SelectItem
                  value="apple"
                  className="text-white font-medium text-sm"
                >
                  Feature Film
                </SelectItem>
                <SelectItem
                  value="banana"
                  className="text-white font-medium text-sm"
                >
                  Short Film
                </SelectItem>
                <SelectItem
                  value="blueberry"
                  className="text-white font-medium text-sm"
                >
                  Documentary
                </SelectItem>
                <SelectItem
                  value="grapes"
                  className="text-white font-medium text-sm"
                >
                  Commercial
                </SelectItem>
                <SelectItem
                  value="pineapple"
                  className="text-white font-medium text-sm"
                >
                  Other
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-white font-medium text-sm">Project Details</Label>
          <Textarea className="text-white font-medium text-sm h-25 bg-[#1A1A1A] border border-gray-300/20" />
        </div>
        <div className="flex justify-center items-center mt-2 md:mt-0">
            <Button className=" bg-[#1A1A1A] border border-[#D4AF38] rounded-lg text-white font-semibold cursor-pointer hover:bg-[#D4AF38] transition-all duration-300 ease-in-out hover:scale-105">Send Message</Button>
        </div>

        <div className="flex justify-center items-center mt-2 gap-2">
          <p className="text-white text-sm font-medium">You can also reach out to me on WhatsApp</p>
          <Button className="text-white text-sm font-medium bg-[#25D366] hover:bg-[#25D366] hover:text-base transition-all ease-in-out hover:scale-105 duration-300 cursor-pointer">Click Me</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
