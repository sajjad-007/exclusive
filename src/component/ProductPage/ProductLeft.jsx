import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const ProductLeft = ({ categoryData, isLoading, error }) => {
  // console.log(categoryData)
  const [dropdown, setDropdown] = useState(null);
  let handleDropdown = (id) => {
    setDropdown((prev) => {
      return prev === id ? null : id;
    });
  };
  return (
    <div className="w-[20%] pt-10">
      {/* hero section side category */}
      <div className="w-full flex flex-col gap-4 ">
        <h3 className="font-poppins text-xl font-bold text-black2626 mb-4">
          Shop by Category
        </h3>
        {isLoading
          ? [...new Array(10)]?.map((item, index) => (
              <>
                <div
                  key={index}
                  className="animate-pulse flex items-center justify-between  cursor-pointer"
                >
                  <div className="h-7 w-full bg-gray-300 rounded"></div>
                </div>
              </>
            ))
          : categoryData?.map((item) => (
              <div
                className=" transition-all ease-linear duration-200 flex flex-col gap-2 justify-between  cursor-pointer"
                key={item._id}
              >
                <ul
                  className="text-lg capitalize font-normal font-poppins leading-6 text-text2-black group-hover:text-primary-fff group-hover:pl-2 transition-all ease-linear duration-200 flex items-center justify-between bg-primary-fff hover:bg-[#cccdce8f] hover:text-text2-black pl-2 rounded-md w-full py-3"
                  onClick={() => handleDropdown(item._id)}
                >
                  <li>{item?.name}</li>
                  {dropdown == item._id ? (
                    <span className="pr-4">
                      <FaChevronDown />
                    </span>
                  ) : (
                    item?.subCategory.length > 0 && (
                      <span className="pr-4">
                        <FaChevronRight />
                      </span>
                    )
                  )}
                </ul>
                <div className={`${dropdown == item._id ? "block" : "hidden"}`}>
                  {item?.subCategory &&
                    item?.subCategory?.map((subItem) => (
                      <ul className="mb-2" key={subItem._id}>
                        <li className="font-poppins text-lg font-medium py-2 pl-3 hover:bg-[#e0e4e775] hover:text-text2-black rounded-md ">
                          {subItem?.name}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
            ))}
        {/* //shpo by color part */}
        <div className="color">
          <h3 className="font-poppins text-xl font-bold text-black2626 capitalize mt-10">
            shop by color
          </h3>
          <div className="flex flex-col gap-4 mt-5">
            <div className="colors flex gap-3 items-center pl-0 hover:pl-4 transition-all ease-linear duration-200 cursor-pointer">
              <span className="icon h-3 w-3 rounded-full bg-black"></span>
              <div className="text">
                <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                  colors 1
                </span>
              </div>
            </div>
            <div className="colors flex gap-3 items-center pl-0 hover:pl-4 transition-all ease-linear duration-200 cursor-pointer">
              <span className="icon h-3 w-3 rounded-full bg-red-500"></span>
              <div className="text">
                <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                  colors 2
                </span>
              </div>
            </div>
            <div className="colors flex gap-3 items-center pl-0 hover:pl-4 transition-all ease-linear duration-200 cursor-pointer">
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
  );
};

export default ProductLeft;
