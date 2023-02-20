import React from "react";

function DiscoverItem({ item }) {
  const { title, desc, icon, color, tags } = item; //destructring
  return (
    <div
      className={`${color} w-full my-4 items-center justify-center flex flex-col border border-black rounded-lg py-2 px-3 `}
    >
      <div className="items-start space-y-2 justify-start flex flex-col w-full py-4 px-2">
        <img
          src={icon}
          alt={desc}
          className="w-24 object-cover object-center"
        />
        <h1 className="text-3xl w-full text-start px-4 font-medium">{title}</h1>
        <h3 className="w-full text-start text-[22px] px-4">{desc}</h3>
        <h1 className="px-4 text-md font-medium pt-4 "> popular Tags </h1>
        <div className="flex w-full py-2 justify-start px-4 items-start">
          {tags.map((tag) => (
            <div key={tag} className="flex flex-col">
              <button className="tag-btn peer z-30">{tag}</button>
              <button className="tag-btn-below -mt-8 z-20 ml-2 peer-hover:flex peer-hover:opacity-100 opacity-0 ">
                {tag}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiscoverItem;
