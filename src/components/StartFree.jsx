import React from "react";
import { startfree_icon, startfree_link } from "../utils/Image_Links";

function StartFree() {
  return (
    <div className="items-center justify-center flex-col-1 2xl:flex border-b-2 border-black">
      <div className=" items-start justify-center 2xl:w-[50%] py-24 2xl:px-24 px-12 flex flex-col 2xl:h-[700px] space-y-12 bg-[#F1F333]">
        <h1 className="text-7xl font-medium ">
          Start free, pay less as you grow.
        </h1>
        <h3 className="text-3xl leading-snug">
          We’re all about more. More breaks, more calm, more money in your
          pocket. We used to think differently, like ‘what’s in it for us?,’ but
          then we discovered, some things are more important than money.
        </h3>
        <button className="text-2xl font-medium">View Pricing ---</button>
      </div>
      <div className="bg-[#FFC900] 2xl:w-[60%] items-center justify-center flex h-[700px] border-l-2 border-black relative">
        <img
          src={startfree_link}
          className="w-[500px] h-[500px]"
          alt="Start Free"
        />
        <img
          src={startfree_icon}
          alt="New_Icon"
          className="absolute -bottom-5 left-24 w-[250px]  "
        />
      </div>
    </div>
  );
}

export default StartFree;
