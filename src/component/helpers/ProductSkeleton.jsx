import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const ProductSkeleton = () => {
  return (
    <div>
      <div className="main w-[270px] animate-pulse">
        <div className="main_wrapper">
          {/* Part One - Image Section */}
          <div className="img_part w-full h-[270px] mb-5 bg-gray-300 rounded relative overflow-hidden">
            <div className="px-3 py-3">
              <div className="item_part flex items-center justify-between">
                <span className="py-1 px-3 bg-gray-400 text-transparent rounded-sm w-12 h-5"></span>
                <div className="icons h-8 w-8 bg-gray-400 rounded-full"></div>
              </div>
              <div className="img_part relative">
                <div className="img w-[172px] h-[152px] mx-10 my-5 bg-gray-400 rounded"></div>
                <div className="img_icon absolute left-[213px] top-[-12px]">
                  <div className="icons h-8 w-8 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Add to Cart */}
            <div className="absolute bottom-[-40px] left-0 h-7 w-full bg-gray-400 px-3 py-5 rounded-b-md"></div>
          </div>

          {/* Part Two - Details Section */}
          <div className="comment part flex flex-col gap-2">
            <div className="w-[260px] h-6 bg-gray-400 rounded"></div>
            <div className="flex gap-3">
              <span className="w-10 h-6 bg-gray-400 rounded"></span>
              <span className="w-10 h-6 bg-gray-400 rounded"></span>
            </div>
            <div className="start mt-2 flex gap-1">
              {[...new Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="w-5 h-5 bg-gray-400 rounded"
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
