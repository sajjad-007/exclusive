import React, { useState } from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import MyImg from "../../assets/joy.png";
import { ImCross } from "react-icons/im";
import { RiVisaLine } from "react-icons/ri";
import bkashImg from "../../assets/checkout/bkash.png";
import masterCardImg from "../../assets/checkout/master_card.png";
import visaCardImg from "../../assets/checkout/visa.png";
import nagad from "../../assets/checkout/nagad.png";
import monitorImg from "../../assets/checkout/monitor.png";
import Button from "../../component/button/Button";
import { useGetSingleAddtoCartQuery } from "../../features/Api/exclusiveApi";
import TaufiSirqInput from "./TaufiSirqInput";
// import CheckInput from "./CheckInput";
import { useForm } from "react-hook-form";
import { usePlaceOrderMutation } from "../../features/Api/exclusiveApi";
const CheckOut = () => {
  const { data, isLoading, isError } = useGetSingleAddtoCartQuery();
  //place order mutation rtk query
  const [PlaceOrder, { isLoading: orderLoading }] = usePlaceOrderMutation();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { email, firstName, phoneNumber } = userInfo;
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    // formState: { errors },
  } = useForm();

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
    address: "London",
    district: "bosnia",
    city: "california",
    postcode: "123",
    phoneNumber: phoneNumber,
    email: email,
    paymentMethod: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // ...userValue = means userValue main object ke copy kore use korbe
    // [name]: value = "name" userValue er input property, "value" userValue object gulor input's value
    setUserValue({ ...userValue, [name]: value });
  };
  const onSubmit = async (data) => {
    try {
      const orderData = {
        customerInfo: {
          firstName: userValue.firstName,
          address: userValue.address,
          city: userValue.city,
          district: userValue.district,
          phoneNumber: parseInt(userValue.phoneNumber),
          email: userValue.email,
          postcode: parseInt(userValue.postcode),
        },
        paymentInfo: {
          paymentmethod: userValue.paymentMethod,
          ispaid: true,
        },
      };
      const response = await PlaceOrder(orderData).unwrap();
      if(response.url){
        window.location.href = response.url
      }
    } catch (error) {
      console.error("error from checkout form onsubmit", error);
    }
  };
  return (
    <div className="container">
      <div className="py-20">
        <BreadCrumb />
      </div>
      <div className="main mb-36">
        <h1 className="font-inter font-medium text-text2-black text-4xl leading-8 tracking-[1.44px] capitalize mb-12">
          Billing Details
        </h1>

        <div className="content_part flex justify-between flex-wrap">
          {/* input section start */}
          <form
            className="flex justify-between gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="part1 flex flex-col gap-8 w-[40%]">
              {userInput?.map(({ name }, index) => (
                <div key={index}>
                  <label
                    htmlFor="first_name"
                    className="block mt-3 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
                  >
                    {name}
                    <span
                      className={
                        name == "postalcode"
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
                    defaultValue={userValue[name]}
                    {...register(name, {
                      required: name === "postalcode" ? false : true,
                      pattern:
                        name === "email"
                          ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                          : undefined, // Email pattern
                    })}
                    className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={`Enter your ${name}`}
                  />
                </div>
              ))}

              {/* <TaufiSirqInput /> */}
            </div>
            {/* <CheckInput/> */}
            {/* input section end */}

            {/* product section start */}
            <div className="part2 w-[40%] mt-7 ">
              {/* product section start */}
              <div className="flex flex-col gap-6 h-[200px] overflow-y-scroll checkOut_scrollbar">
                {data?.data?.findAllProduct.map((item, index) => (
                  <div
                    className="product flex items-center w-[80%] flex-1 "
                    key={index._id}
                  >
                    <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize overflow-hidden flex gap-4 items-center w-[270px] ">
                      <img
                        src={item?.product?.image[0]}
                        alt="not found"
                        className="h-12 w-12 object-fill group"
                      />
                      <h6 className="font-poppins font-normal text-text2-black text-base leading-6 capitalize truncate ">
                        {item?.product?.name}
                      </h6>
                    </div>
                    <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize pl-24">
                      ${item?.product?.price}
                    </div>
                  </div>
                ))}
              </div>
              {/* product section end */}

              {/* Calculation section start */}
              <div className="flex flex-wrap flex-row gap-4 mt-8">
                {/* Subtotal */}
                <div className="w-[400px] border-b-[3px] border-solid border-b-slate-300 pb-4 flex items-center justify-between">
                  <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                    subtotal:
                  </h5>
                  <span className="font-poppins font-medium text-text2-black leading-6 text-base">
                    ${data?.data?.productPriceQuantity?.totalPrice}
                  </span>
                </div>
                {/* Subtotal*/}
                {/* Shipping Fee */}
                <div className="w-[400px] border-b-[3px] border-solid border-b-slate-300 pb-4 flex items-center justify-between">
                  <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                    Shipping:
                  </h5>
                  <span className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                    free
                  </span>
                </div>
                {/* Shipping Fee*/}
                {/* Total amount  */}
                <div className="w-[400px] flex items-center justify-between">
                  <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                    total:
                  </h5>
                  <span className="font-poppins font-medium text-text2-black leading-6 text-base">
                    ${data?.data?.productPriceQuantity?.totalPrice}
                  </span>
                </div>
                {/* Total amount */}
              </div>
              {/* Calculation section end */}

              {/* Payment method start */}
              <div className="payment_method1 mt-[34px] flex items-center gap-[140px] ">
                <div className="flex gap-4 items-center">
                  <div className="flex items-center me-4">
                    <input
                      id="bank-radio"
                      type="radio"
                      name="paymentMethod"
                      onClick={() =>
                        setUserValue({ ...userValue, paymentMethod: "online" })
                      }
                      checked={userValue.paymentMethod === "online"}
                      className="w-6 h-6 text-red-600 bg-gray-100 border-gray-300 !rounded-[100%] focus:ring-red-500"
                    />
                  </div>
                  <p className="font-poppins font-normal text-base text-text2-black leading-6 capitalize">
                    bank
                  </p>
                </div>
                <div className="banking_icons flex gap-2">
                  <div className="w-10 h-7 overflow-hidden cursor-pointer">
                    <img
                      src={bkashImg}
                      alt="not found"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="w-10 h-7 overflow-hidden cursor-pointer">
                    <img
                      src={masterCardImg}
                      alt="not found"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="w-10 h-7 overflow-hidden cursor-pointer">
                    <img
                      src={visaCardImg}
                      alt="not found"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div className="w-10 h-7 overflow-hidden cursor-pointer">
                    <img
                      src={nagad}
                      alt="not found"
                      className="w-full h-full object-fill"
                    />
                  </div>
                </div>
              </div>
              {/* cass on delivery */}
              <div className="payment_method2 mt-8">
                <div className="flex gap-4 items-center">
                  <div className="flex items-center me-4">
                    <input
                      id="cash-radio"
                      type="radio"
                      name="paymentMethod"
                      onClick={() =>
                        setUserValue({ ...userValue, paymentMethod: "cash" })
                      }
                      checked={userValue.paymentMethod === "cash"}
                      className="w-6 h-6 text-red-600 bg-gray-100 border-gray-300 !rounded-[100%] focus:ring-red-500"
                    />
                  </div>
                  <p className="font-poppins font-normal text-base text-text2-black leading-6 capitalize">
                    Cash on delivery
                  </p>
                </div>
              </div>
              {/* Payment method end */}

              {/* Apply coupon start */}
              <div className="my-8">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="font-poppins font-normal text-base text-text-7d8 py-4 px-10 border border-text-7d8 rounded"
                  />
                  <Button text="apply coupon" className="common_btn" />
                </div>
              </div>
              {/* Apply coupon end */}

              {/* Button start */}
              <Button type="submit" text="place order" className={orderLoading ? "loading...": "common_btn"} />
              {/* Button end */}
            </div>
          </form>
          {/* product section end*/}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
