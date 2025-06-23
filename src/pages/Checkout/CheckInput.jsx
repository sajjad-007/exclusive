import React from "react";

const CheckInput = () => {
  return (
    <div className="part1 flex flex-col gap-8 w-[40%]">
      {/* first name start*/}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="first_name"
          className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
        >
          First name
          <span className="text-secondary2-db44 text-base">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //   onChange={Formik.handleChange}
          //   value={Formik.values.firstName}
          className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // placeholder="Rimel"
          required
        />
      </div>
      {/* first name end*/}

      {/* company name start */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="first_name"
          className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
        >
          Company Name (optional)
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //   onChange={Formik.handleChange}
          //   value={Formik.values.firstName}
          className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      {/* company name end */}

      {/* street address start */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="first_name"
          className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
        >
          Street Address
          <span className="text-secondary2-db44 text-base">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //   onChange={Formik.handleChange}
          //   value={Formik.values.firstName}
          className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // placeholder="Rimel"
          required
        />
      </div>
      {/* street address end */}

      {/* district start */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="first_name"
          className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
        >
          district
          <span className="text-secondary2-db44 text-base">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      {/* district end*/}

      {/* town/city start */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="first_name"
          className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
        >
          Town/City
          <span className="text-secondary2-db44 text-base">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //   onChange={Formik.handleChange}
          //   value={Formik.values.firstName}
          className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // placeholder="Rimel"
          required
        />
      </div>
      {/* town/city end*/}

      {/* Phone Number start*/}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="first_name"
          className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
        >
          Phone Number
          <span className="text-secondary2-db44 text-base">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //   onChange={Formik.handleChange}
          //   value={Formik.values.firstName}
          className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // placeholder="Rimel"
          required
        />
      </div>
      {/* Phone Number end */}

      {/* email address start */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="first_name"
          className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
        >
          Email Address
          <span className="text-secondary2-db44 text-base">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          //   onChange={Formik.handleChange}
          //   value={Formik.values.firstName}
          className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // placeholder="Rimel"
          required
        />
      </div>
      {/* email address end */}

      {/* checkbox start */}
      <div>
        <div className="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input type="checkbox" className="w-4 h-4 bg-secondary2-db44" />
          </div>
          <label
            for="remember"
            class="ms-2 font-poppins font-normal text-base leading-6"
          >
            Save this information for faster check-out next time
          </label>
        </div>
      </div>
      {/* checkbox end */}
    </div>
  );
};

export default CheckInput;
