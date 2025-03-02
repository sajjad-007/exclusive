import React from "react";
import { CiMobile4 } from "react-icons/ci";

const CategoryCart = () => {
  return (
    <div className="main">
      <div className="w-[170px] py-6 px-14 bg-text-faf rounded border-[1px] border-text-7d8 flex gap-[30px] hover:bg-secondary2-db44 hover:border-bg-secondary2-db44 group cursor-pointer transition-all ease-linear duration-300">
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-[56px] text-text2-black group-hover:text-primary-fff">
            <CiMobile4 />
          </span>
          <h2 className="text-text2-black group-hover:text-primary-fff font-poppins text-base font-normal leading-6 capitalize ">phone</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCart;
