import React from "react";
import { sellanyone_link } from "./../utils/Image_Links";

function SellAnyone() {
  return (
    <div className="items-center justify-center flex-col-1 2xl:flex border-b-2 border-black">
      <div className="bg-black 2xl:w-[60%] items-center justify-center flex h-[815px] border-r-2 border-black ">
        <img
          src={sellanyone_link}
          className="w-[700px] h-[700px]"
          alt="sell anything"
        />
      </div>
      <div className=" items-start justify-center 2xl:py-0 py-24 2xl:w-[50%] px-6 2xl:px-24 flex flex-col 2xl:h-[800px] space-y-12">
        <h1 className="text-7xl font-medium ">Sell to anyone</h1>
        <h3 className="text-3xl leading-snug  w-full">
          Build a loyal following with simple posts, email newsletters, and
          automated workflows. Plus let your customers pay what they want or
          choose between one-time, recurring, or fixed-length payments in your
          currency of choice. (We’ll handle the fine print, like VAT).
        </h3>
      </div>
    </div>
  );
}

export default SellAnyone;
