import React from "react";
import login from "../../assets/login/login.png";
import Button from "../../component/button/Button";
const LogIn = () => {
  return (
    <div className="main pt-[60px] pb-36">
      <div className="container">
        <div className="flex gap-[100px] justify-between items-center">
            {/* image part */}
          <div className="Img_part w-[60%] h-[601px] overflow-hidden">
            <img
              src={login}
              alt="not found"
              className="w-full h-full object-fill"
            />
          </div>
          {/* log in part */}
          <div className="text_part w-[40%]">
            <div className="flex flex-col gap-12">
                {/* Heading part */}
              <div className="headings flex flex-col gap-6">
                <h1 className="font-inter text-text2-black text-4xl font-medium leading-8 traking-[1.44px]">
                  Log in to Exclusive
                </h1>
                <h4 className="font-poppins font-medium text-text2-black text-base leading-6">
                  Enter your details below
                </h4>
              </div>
              {/* inputs and button part */}
              <div className="body_parts flex flex-col gap-10">
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6"
                />
                <input
                  type="text"
                  placeholder="password"
                  className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6 "
                />
                <div className="flex items-center gap-[87px]">
                  <Button text="log in" className="common_btn py-4 px-12" />
                  <p className="font-poppins font-normal text-secondary2-db44 text-base leading-6 capitalize cursor-pointer">forget password?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
