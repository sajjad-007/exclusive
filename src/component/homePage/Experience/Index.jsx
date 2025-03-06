import React from "react";
import mics from '../../../assets/exprience.png'
const Experience = () => {
  return (
    <section className="Experience mt-[140px] mb-[71px] ">
      <div className="container">
        <div className="main_wrapper flex ">
          <div className="Experience_text_part bg-button-black w-1/2 h-full text-primary-fff py-[70px] pl-[50px] flex flex-col gap-8 items-start">
            <h5 className="text-button-green font-poppins text-lg font-semibold leading-5 capitalize">
              categories
            </h5>
            <h1 className="text-primary-fff font-inter text-5xl font-semibold leading-[60px] tracking-[1.92px]">
              Enhance Your Music Experience
            </h1>
            <div className="time flex gap-x-6">
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  5
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  days
                </p>
              </div>
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  23
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  hours
                </p>
              </div>
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  19
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  minutes
                </p>
              </div>
              <div className="h-[62px] w-[62px] bg-primary-fff rounded-full text-button-black flex flex-col items-center justify-center capitalize py-[14px] px-[15px]">
                <p className="text-text2-black font-poppins text-lg font-semibold leading-6">
                  50
                </p>
                <p className="text-text2-black font-poppins text-xs font-medium leading-[18px]">
                  second
                </p>
              </div>
            </div>
            <div>
              <button className="common_btn bg-button-green border-2 border-solid border-button-green ">
                buy now!
              </button>
            </div>
          </div>
          <div className="Experience_img_part  w-1/2 h-fulloverflow-hidden flex items-center justify-center imagShadow bg-button-black">
            <div className="w-[450px] h-full py-11 px-4 overflow-hidden object-cover">
              <img src={mics} alt="not found" className="w-[568px] h-[327px] bg-no-repeat bg-cover "/>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
