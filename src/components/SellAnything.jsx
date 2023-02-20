import React from "react";
import { sellanything_link } from "../utils/Image_Links";

const points = [
  "Sell your Top 10 lists",
  "Sell your crypto tips",
  "Sell your fractal pack",
  "Sell your keto cookbook",
  "Sell your C4D scenes",
  "Sell your new emojis",
  "Seriously, sell anything!",
];

function SellAnything() {
  return (
    <div className="items-center justify-center 2xl:flex flex-col-1 border-b-2 border-black">
      <div className="bg-[#23A094] 2xl:w-[60%] items-center  justify-start flex h-[815px] 2xl:border-r-2 2xl:border-black ">
        <img
          src={sellanything_link}
          className="w-[815px] h-[815px] -ml-12"
          alt="sell anything"
        />
      </div>
      <div className=" items-start justify-start 2xl:w-[50%] py-24  flex flex-col 2xl:h-[800px] space-y-12">
        <h1 className="text-7xl font-medium px-12">Sell Anything</h1>
        <h3 className="text-2xl leading-snug px-12 w-3/4 font-medium">
          Video lessons. Monthly subscriptions. Physical products. Whatever!
          Gumroad was created to help you experiment with all kinds of ideas and
          formats.
        </h3>
        <div className="px-12 space-y-2 font-medium text-xl">
          {points.map((point) => (
            <h1 key={point}> ---- {point}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellAnything;
