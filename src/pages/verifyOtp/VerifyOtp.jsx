import React, { useState } from "react";
import { axiosinstance } from "../../../helper/axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import {
  toastSuccess,
  toastError,
  toastInfo,
} from "../../component/utility/toastify";

const VerifyOtp = () => {
  const params = useParams();
  const { email } = params;
  const navigate = useNavigate()
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingg, setLoadingg] = useState(false);

  //Handle your OTP
  const handleOtp = async () => {
    setLoading(true);
    try {
      // axios instance is used to seperate common api "http://localhost:3000/api/v1/" ;
      const response = await axiosinstance.post("otp", {
        email: email,
        otp: otp,
      });
      if (response.statusText.toLocaleLowerCase === "OK".toLocaleLowerCase) {
        toastSuccess(response.data.message);
        setTimeout(() => {
          
          navigate('/login')
        }, 1000);
      }
    } catch (error) {
      console.error("Error from otpVerify", error);
      toastError(`${error.response.data.message}`);
    } finally {
      setLoading(false);
    }
  };
  // Handle your resent OTP
  const handleResentOtp = async () => {
    setLoadingg(true);
    try {
      // axios instance is used to seperate common api "http://localhost:3000/api/v1/" ;
      const response = await axiosinstance.post("resendotp", {
        email: email,
      });
      if (response.statusText.toLocaleLowerCase === "OK".toLocaleLowerCase) {
        toastSuccess(response.data.message);
      }
    } catch (error) {
      console.error("Error from otpVerify", error);
      toastError(`${error.response.data.message}`);
    } finally {
      setLoadingg(false);
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md mx-auto my-44">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
        <p className="text-md md:text-xl">Enter the OTP we just sent you.</p>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
        <input
          type="number"
          placeholder="enter your OTP"
          className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          onChange={(e) => setOtp(e.target.value)}
          value={otp}
        />
        {loading ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <button
            onClick={handleOtp}
            className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
          >
            Confirm
          </button>
        )}
        {loadingg ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <button
            onClick={handleResentOtp}
            className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
          >
            Resent OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default VerifyOtp;
