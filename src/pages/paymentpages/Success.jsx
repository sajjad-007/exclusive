import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="p-8 md:mx-auto text-center">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          />
        </svg>
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
          Payment Done!
        </h3>
        <p className="text-gray-600 my-2">
          Thank you for completing your secure online payment.
        </p>
        <p>Have a great day!</p>
        <div className="py-10">
          <Link
            to={"/"}
            className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-6 uppercase"
          >
            GO BACK to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
