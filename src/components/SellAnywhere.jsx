import React from "react";
import { sellanywhere_link } from "../utils/Image_Links";

function SellAnywhere() {
  return (
    <div className="items-center justify-center flex-col-1 2xl:flex border-b-2 border-black">
      <div className="bg-[#FFC900] 2xl:w-[60%] items-center justify-center flex 2xl:h-[815px] border-r-2 border-black ">
        <img
          src={sellanywhere_link}
          className="w-[700px] h-[700px]"
          alt="sell anywhere"
        />
      </div>
      <div className=" items-start justify-center 2xl:w-[50%] py-24 px-6 2xl:px-24 flex flex-col 2xl:h-[800px] space-y-12">
        <h1 className="text-7xl font-medium ">Sell Anywhere</h1>
        <h3 className="text-3xl leading-snug">
          Create and customize your storefront with our all-in-one platform or
          choose to use your personal site instead. With Zapier, you can
          seamlessly connect your Gumroad account to thousands of apps in your
          current stack.
        </h3>
      </div>
    </div>
  );
}

export default SellAnywhere;
