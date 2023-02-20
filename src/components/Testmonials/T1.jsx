import React from "react";
import { t1_link, t1_icon_link } from "./../../utils/Image_Links";

function T1() {
  return (
    <div className="py-24 px-12 items-center justify-between flex border-b-2 border-black bg-[#FF90E8] ">
      <div className="2xl:w-[50%] items-center justify-center flex flex-col">
        <h1 className="2xl:w-[80%] 2xl:text-4xl lg:text-2xl text-xl  leading-snug">
          “I launched MaxPacks as an experimental side gig; but within 2 years
          those Procreate brushes were earning more than my 6-figure salary in
          CG. Leaving in favor of Gumroad enabled me to explore other aspects of
          my art, develop new hobbies, and finally prioritize my personal life.”
        </h1>
        <h1 className="w-full pt-12 px-24 text-xl font-medium ">
          Max Ulichney sells Procreate Brush Packs
        </h1>
      </div>
      <div className="w-[50%] hidden xl:flex items-center justify-center  relative">
        <img
          src={t1_link}
          className="w-[600px] h-[600px] "
          alt="testmonial_1"
        />
        <img
          src={t1_icon_link}
          className="absolute left-48 bottom-0 "
          alt="t1_icon"
        />
      </div>
    </div>
  );
}

export default T1;
