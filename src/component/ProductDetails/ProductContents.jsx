import React from "react";
import Star from "../common/commonComponet/Star";
import Button from "../button/Button";

const ProductContents = () => {
  return (
    <div className="main">
      <div className="head border-b-2 border-solid border-text-7d8 pb-6">
        <h1 className="font-inter font-semibold text-text2-black text-2xl leading-6 tracking-[0.72px]">
          Havic HV G-92 Gamepad
        </h1>
        <div className="flex items-center gap-2 my-4">
          <span>
            <Star rating={3.5} />
          </span>
          <span className="font-poppins font-normal text-text-7d8 text-sm leading-5 pr-2">
            (14 reviews)
          </span>
          <span className="font-poppins font-normal text-button-green text-sm leading-5 capitalize border-l-2 border-solid border-text-7d8 pl-4">
            in stock
          </span>
        </div>
        <span className="font-inter font-normal text-text2-black text-2xl leading-5 tracking-[0.72px]">
          $192.00
        </span>
        <p className="font-poppins font-normal text-text2-black text-sm leading-5 mt-6">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
      </div>
      <div className="body">
        {/* //colors */}
        <div className="flex items-center gap-x-6">
          <span className="text-text2-black font-inter text-xl font-normal leading-5 tracking-[0.6px] capitalize my-6">
            colors:
          </span>
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 rounded-full bg-sky-400 border-[2.5px] border-solid border-text2-black cursor-pointer"></div>
            <div className="h-6 w-6 rounded-full bg-red-300 cursor-pointer"></div>
          </div>
        </div>
        {/* size */}
        <div className="flex items-center gap-x-6">
          <span className="text-text2-black font-inter text-xl font-normal leading-5 tracking-[0.6px] capitalize my-6">
            size:
          </span>
          <div className="flex items-center gap-x-4">
            {[...new Array(5)].map((_, index) => (
              <div key={index} className="flex items-center justify-center rounded h-7 w-7 text-text2-black border-[1px] border-solid border-text-7d8 cursor-pointer py-[6px] px-[7px]">
                <span className="text-text2-black font-poppins text-sm font-semibold leading-5 uppercase">
                  xs
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* increment, button, love */}
        <div className="flex items-center justify-between gap-4">
            {/* increment */}
            <div>
                <span>2</span>
            </div>
            {/* button */}
            <div>
                <Button className="common_btn py-3 px-12" text="buy now"/>
            </div>
        </div>
      </div>
      <div className="foot"></div>
    </div>
  );
};

export default ProductContents;
