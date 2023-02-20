import React from "react";
import {
  exciting_link,
  instead_link,
  start_link,
} from "./../utils/Image_Links";

function SmallBits() {
  return (
    <div className="items-center justify-between w-full  border-y-2 border-black -mt-2 flex flex-col">
      <div className="items-center justify-between w-full  2xl:flex flex-col-1">
        <div className=" risk-bits-section ">
          <h1 className="risk-bits-text">
            Don’t take risks. <br />
            <b className="pl-5 font-normal">That’s scary!</b>
          </h1>
        </div>
        <div className=" risk-bits-section border-l-2 border-black bg-[#ff90e8]">
          <h1 className="risk-bits-text">
            Place small bets. <br />
            <b className="pl-5 font-normal">That’s exciting!</b>
          </h1>
        </div>
      </div>
      {/* images */}
      <div className="items-center justify-center w-full 2xl:flex flex-col-1 border-t-2 relative border-black">
        <div className="bg-black w-full py-12 h-[700px] items-center justify-center flex flex-col">
          <h1 className="callout">Instead of selling a book...</h1>
          <img src={instead_link} alt="instead" />
        </div>
        <div className="bg-[#FFC900] w-full py-12 h-[700px] items-center justify-center  flex flex-col">
          <h1 className="callout w-[40%]  ">
            ...start by selling a blog post!
          </h1>
          <img src={start_link} alt="start" />
        </div>
        <img
          src={exciting_link}
          alt="exciting"
          className="-mb-24 mr-24 absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}

export default SmallBits;
