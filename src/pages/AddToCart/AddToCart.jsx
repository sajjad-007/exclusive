import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import MyImg from "../../assets/joy.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const AddToCart = () => {
  return (
    <div>
      <div className="container">
        <div className="my-[60px]">
          <BreadCrumb />
        </div>
        {/* product head part */}
        <div className="body py-6 px-10 shadow-lg mb-10 rounded-md flex items-center justify-between gap-[280px]">
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            product
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            price
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            quantity
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize text-end flex-1">
            subtotal
          </div>
        </div>
        {/* product head part or details part */}
        <div className="body py-6 px-10 shadow-lg mb-10 rounded-md flex items-center justify-between">
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize overflow-hidden flex gap-4 items-center flex-1 bg-green-300 relative">
            <img
              src={MyImg}
              alt="not found"
              className="h-12 w-12 object-fill"
            />
            <span className="text-sm text-primary-fff bg-button-red h-[20px] w-[20px] rounded-full flex items-center justify-center cursor-pointer ">
              <ImCross />
            </span>
            <h6 className="font-poppins font-normal text-text2-black text-base leading-6 capitalize truncate ">
              LCD Monitor
            </h6>
          </div>
          <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize pl-24">
            $600
          </div>
          <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize flex justify-center items-center relative">
            <input
              type="number"
              className="border border-text-7d8 rounded w-20 h-10 px-4 py-[6px]"
            />
            <div className="absolute flex flex-col left-[55%]">
              <span className="cursor-pointer text-base">
                <FaAngleUp />
              </span>
              <span className="cursor-pointer text-base">
                <FaAngleDown />
              </span>
            </div>
          </div>
          <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize text-end">
            $750
          </div>
        </div>
        {/* product body part or details part*/}
      </div>
    </div>
  );
};

export default AddToCart;
