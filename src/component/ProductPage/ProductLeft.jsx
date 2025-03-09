import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
const ProductLeft = ({ categoryData, isLoading, error }) => {
  return (
    <div>
      <div className="container">
        <div className="main_wrapper mb-10">
          <div className="mt-20 mb-12">
            <BreadCrumb />
          </div>
          {/* hero section side category */}
          <div className="w-[21%]  pt-10 flex flex-col gap-4 ">
            <h3 className="font-poppins text-xl font-bold text-black2626">
              Shop by Category
            </h3>
            {isLoading
              ? [...new Array(10)]?.map((item, index) => (
                  <>
                    <div
                      key={index}
                      className="animate-pulse flex items-center justify-between mr-4 cursor-pointer"
                    >
                      <div className="h-6 w-full bg-gray-300 rounded"></div>
                      {/* <div className="h-4 w-4 bg-gray-300 rounded"></div> */}
                    </div>
                  </>
                ))
              : categoryData?.map((item, index) => (
                  <>
                    <div
                      className=" group transition-all ease-linear duration-200 flex items-center justify-between mr-4 cursor-pointer"
                      key={index}
                    >
                      <h4 className="text-lg capitalize font-normal font-poppins leading-6 text-text2-black pl-0 group-hover:text-text-7d8 group-hover:pl-2 transition-all ease-linear duration-200 ">
                        {item}
                      </h4>
                    </div>
                  </>
                ))}
            <div className="">
              <h3 className="font-poppins text-xl font-bold text-black2626 capitalize mt-10">
                shop by color
              </h3>
              <div className="flex flex-col gap-4 mt-5">
                <div className="colors flex gap-3 items-center">
                  <span className="icon h-3 w-3 rounded-full bg-black"></span>
                  <div className="text">
                    <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                      colors 1
                    </span>
                  </div>
                </div>
                <div className="colors flex gap-3 items-center">
                  <span className="icon h-3 w-3 rounded-full bg-red-500"></span>
                  <div className="text">
                    <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                      colors 2
                    </span>
                  </div>
                </div>
                <div className="colors flex gap-3 items-center">
                  <span className="icon h-3 w-3 rounded-full bg-button-green"></span>
                  <div className="text">
                    <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                      colors 3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
