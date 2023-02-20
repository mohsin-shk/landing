import React from "react";

function MakeOwn() {
  return (
    <div className="items-center justify-center w-full border-y-2 border-black flex flex-col space-y-14 px-4 py-36">
      <h1 className="2xl:text-8xl lg:text-4xl text-2xl max-w-1/2 w-1/2 text-center">
        Make your own road
      </h1>
      <h1 className="2xl:text-4xl text-xl 2xl:max-w-1/2 2xl:w-[60%] text-center leading-snug">
        Whether you need more balance, flexibility, or just a different gig, we
        make it easier to chart a new path. You don't have to be a tech expert
        or even understand how to start a business. You just gotta take what you
        know and sell it.
      </h1>
      <div className="text-xl py-4 px-4">
        <button className="text-2xl font-medium">Explore Features</button>
      </div>
    </div>
  );
}

export default MakeOwn;
