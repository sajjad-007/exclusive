import React, { useState } from "react";

const TaufiSirqInput = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { email, firstName, phoneNumber } = userInfo;

  const [userInput, setUserInput] = useState([
    { name: "firstName" },
    { name: "address" },
    { name: "district" },
    { name: "city" },
    { name: "postalcode" },
    { name: "phoneNumber" },
    { name: "email" },
  ]);
  const [userValue, setUserValue] = useState({
    firstName: firstName,
    address: "",
    district: "",
    city: "",
    postcode: "",
    phoneNumber: phoneNumber,
    email: email,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserValue({ ...userValue, [name]: value });
  };

  return (
    <div>
      {/* first name start*/}
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {userInput?.map(({ name }, index) => (
          <div key={index}>
            <label
              htmlFor="first_name"
              className="block mt-3 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
            >
              {name}
              <span
                className={
                  name == "postal code"
                    ? "text-primary-fff"
                    : "text-secondary2-db44 text-base pt-4"
                }
              >
                *
              </span>
            </label>
            <input
              type={
                name == "postalcode"
                  ? "number"
                  : name == "phoneNumber"
                  ? "number"
                  : name == "email"
                  ? "email"
                  : "text"
              }
              id="firstName"
              name={name}
              onChange={handleChange}
              value={userValue[name]}
              className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder={`Enter your ${name}`}
              required
            />
          </div>
        ))}
        <button type="submit" className="common_btn mt-4">
          submit
        </button>
      </form>
      {/* first name end*/}
    </div>
  );
};

export default TaufiSirqInput;
