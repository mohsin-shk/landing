import React from "react";
import { g2, g4, g5, g6, g7, maing } from "./../utils/Image_Links";

function AmountIncome() {
  return (
    <div className="items-center justify-center flex flex-col w-full border-b-2 border-black">
      <div className="items-center justify-center flex flex-col w-full relative py-48">
        <h1 className="2xl:text-[200px] text-[80px]">$3,568,991</h1>
        <h1 className="md:text-[35px] text-[25px] leading-snug md:w-1/2 text-center">
          The amount of income earned by Gumroad digital entrepreneurs last
          week.
        </h1>
        <img
          className="absolute md:flex hidden top-0 -mt-24 mr-[1200px] "
          src={g4}
          alt="gumroad_icon"
        />
        <img
          className="absolute md:flex hidden top-5 -left-16 "
          src={g5}
          alt="gumroad_icon"
        />
        <img
          className="absolute md:flex hidden bottom-10 left-10 w-[200px] h-[200px] "
          src={g2}
          alt="gumroad_icon"
        />
        <img
          className="absolute md:flex hidden top-24 right-48"
          src={g7}
          alt="gumroad_icon"
        />
        <img
          className="absolute md:flex hidden bottom-[30%] -right-12 h-[200px] w-[200px] "
          src={g6}
          alt="gumroad_icon"
        />
      </div>
      <div className="w-full">
        <img className="w-full" src={maing} alt="gumroad_icon" />
      </div>
    </div>
  );
}

export default AmountIncome;
