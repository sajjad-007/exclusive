import React from "react";
import { Link } from "react-router-dom";

const Failed = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="p-6 md:mx-auto text-center">
        <svg
          viewBox="0 0 24 24"
          className="text-red-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 
               12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 
               2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 
               10zm5-13.414L13.414 12 17 15.586 15.586 17 
               12 13.414 8.414 17 7 15.586 10.586 12 7 
               8.414 8.414 7 12 10.586 15.586 7 17 8.414z"
          />
        </svg>
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
          Payment Failed
        </h3>
        <p className="text-gray-600 my-2">
          Unfortunately, we couldn’t process your payment.
        </p>
        <p>Please try again or use a different payment method.</p>
        <div className="py-10">
          <Link to={"/checkout"}
            href="#"
            className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-5 uppercase"
          >
            TRY AGAIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Failed;
