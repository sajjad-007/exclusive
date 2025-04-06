import React from "react";
import "flowbite";
const AccountInputs = () => {
  return (
    <div className="main_div">
      <form>
        <h1 className="text-secondary2-db44 font-poppins font-medium text-xl leading-7 capitalize mb-4">
          edit your profile
        </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 account_style text-text2-black"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Rimel"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 account_style text-text2-black"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 account_style text-text2-black"
            >
              Email
            </label>
            <input
              type="email"
              id="company"
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="enteryour@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 account_style text-text2-black"
            >
              address
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Kingston, 5236, United State"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4">
          <label
            htmlFor="password"
            className="block mb-2 account_style text-text2-black"
          >
            Password changes
          </label>
          <input
            type="password"
            id="password"
            className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Current password"
            required
          />
          <input
            type="password"
            id="password"
           className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="New password"
            required
          />
          <input
            type="password"
            id="password"
           className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm password"
            required
          />
        </div>
        <div className="flex gap-6">
          <button className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12">
            cancle
          </button>
          <button type="submit" className="common_btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInputs;
