import React from "react";

function University() {
  return (
    <div className="items-center justify-center w-full border-b-2 border-black flex flex-col space-y-14 px-4 py-36">
      <h1 className="text-xl max-w-1/2 w-1/2 text-center font-medium">
        Gumroad University
      </h1>
      <h1 className="2xl:text-8xl xl:text-6xl text-4xl 2xl:max-w-1/2 2xl:w-[65%] text-center">
        Independent doesn’t mean alone
      </h1>
      <h1 className="text-3xl 2xl:max-w-1/2 2xl:w-[60%] text-center leading-snug">
        Explore our community resources and level up, together. Get access to
        courses, challenges, podcasts, and learn firsthand how others built
        their online businesses.
      </h1>
      <div className="text-xl py-4 px-4 flex items-center justify-center">
        <button className="text-2xl font-medium">
          Explore University ----
        </button>
      </div>
    </div>
  );
}

export default University;
