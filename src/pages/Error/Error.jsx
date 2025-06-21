import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import Button from "../../component/button/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container flex items-center justify-center mt-[200px]">
      {/* <div className="py-20">
        <BreadCrumb />
      </div> */}
      <div className="flex flex-col items-center justify-center gap-20">
        <div className=" flex flex-col items-center justify-center gap-10">
          <h1 className="font-inter font-medium text-text2-black text-[115px] leading-[115px] tracking-[3.3px]">
            404 Error
          </h1>
          <p className="font-poppins font-normal text-lg text-text2-black leading-6 ">
            Your visited page not found. You may go home page.
          </p>
        </div>
        <Link to="/" className="common_btn mb-36">Back to home page</Link>
      </div>
    </div>
  );
};

export default Error;
