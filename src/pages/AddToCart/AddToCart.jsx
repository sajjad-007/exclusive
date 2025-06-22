import React, { useEffect } from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import MyImg from "../../assets/joy.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "flowbite";
import {
  removeCartItem,
  incrementAmount,
  decrementAmount,
  getTotal,
} from "../../features/counter/productSlice";
import AlertInfo from "../../component/Flowbite/AlertInfo";
import {
  useGetSingleAddtoCartQuery,
  useRemoveAddtoCartMutation,
} from "../../features/Api/exclusiveApi";
import { toastError, toastSuccess } from "../../component/utility/toastify";

const AddToCart = () => {
  const { data, isLoading, isError } = useGetSingleAddtoCartQuery();
  console.log();
  const [RemoveAddtoCart] = useRemoveAddtoCartMutation();
  const handleRemoveCartitem = async ({ _id }) => {
    try {
      const response = await RemoveAddtoCart(_id);
      if (response) {
        toastSuccess(response?.data?.message);
        console.log(response);
      }
    } catch (error) {
      console.error("error from remvoe cartitem", error);
      toastError(`${error}`?.data?.message);
    }
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTotal());
  // }, [localStorage.getItem("cart")]);
  // const { totalAmount, totalItem, value } = useSelector(
  //   (state) => state.cartProduct
  // );
  // const handleRemoveCartitem = (item) => {
  //   dispatch(removeCartItem(item));
  // };
  // let handleIncrement = (item) => {
  //   dispatch(incrementAmount(item));
  // };
  // let handleDecrement = (item) => {
  //   dispatch(decrementAmount(item));
  // };

  return (
    <div>
      <div className="container">
        <div className="my-[60px]">
          <BreadCrumb />
        </div>
        {/* product head part */}
        <div className="body py-6 px-10 shadow-lg mb-10 rounded-md flex items-center justify-between gap-[280px]">
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            product
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            price
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            quantity
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize text-end flex-1">
            subtotal
          </div>
        </div>
        {/* product head part or details part */}
        {data?.data?.findAllProduct?.length <= 0 ? (
          <div>
            <AlertInfo text="Your cart is empty purchase something..." />
            <Link
              to={"/product"}
              className="mb-52 mt-32 flex items-center justify-center"
            >
              <button
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
                  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 
                  dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 
                  dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg 
                  text-md px-5 py-5 text-center me-2 mb-2 capitalize"
              >
                Back to shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="h-[500px] overflow-y-scroll mb-9 scrollbar">
            {data?.data?.findAllProduct?.map((item) => (
              <div key={item?._id} className="flex flex-col gap-10">
                <div className="body py-6 px-10 shadow-md mb-10 rounded-md flex items-center justify-between">
                  <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize overflow-hidden flex gap-4 items-center flex-1 relative">
                    <img
                      src={item?.product?.image[0]}
                      alt="not found"
                      className="h-12 w-12 object-fill group"
                    />
                    <span
                      onClick={() => handleRemoveCartitem(item)}
                      className="text-sm text-primary-fff bg-button-red h-[20px] w-[20px] rounded-full flex items-center justify-center cursor-pointer absolute top-0 left-0"
                    >
                      <ImCross />
                    </span>
                    <h6 className="font-poppins font-normal text-text2-black text-base leading-6 capitalize truncate ">
                      {item?.name}
                    </h6>
                  </div>
                  <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize pl-24">
                    ${item?.product?.price}
                  </div>
                  <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize flex justify-center items-center relative">
                    <input
                      type="number"
                      value={item.quantity}
                      className="border border-text-7d8 rounded w-20 h-10 px-4 py-[6px]"
                    />
                    <div className="absolute flex flex-col left-[55%]">
                      <span
                        className="cursor-pointer text-base"
                        // onClick={() => handleIncrement(item)}
                      >
                        <FaAngleUp />
                      </span>
                      <span
                        className="cursor-pointer text-base"
                        // onClick={() => handleDecrement(item)}
                      >
                        <FaAngleDown />
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize text-end">
                    ${item?.quantity * item?.product?.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* product body part or details part*/}
        {/* return to shop button part  */}
        <div className="flex items-center justify-between mb-20">
          <Link
            to="/product"
            className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12"
          >
            return to shop
          </Link>
          <button className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12">
            update cart
          </button>
        </div>
        {/* return to shop button part  */}
        {/* footer part */}
        <div className="main_foot flex justify-between gap-[173px] flex-wrap mb-36">
          <div className="child1 w-[45%] h-8">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="font-poppins font-normal text-base text-text-7d8 py-4 pl-6 pr-24 border border-text-7d8 rounded"
              />
              <button className="common_btn">apply coupon</button>
            </div>
          </div>
          <div className="child2 w-[35%] h-[370px] border-2 border-text-7d8 rounded px-6 py-8">
            <h4 className="font-poppins font-semibold text-xl text-text2-black leading-7 capitalize mb-6">
              cart total
            </h4>
            <div className="flex flex-wrap flex-row gap-4">
              {/* Subtotal */}
              <div className="w-[400px] border-b-[3px] border-solid border-b-slate-300 pb-4 flex items-center justify-between">
                <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  Toatal Item:
                </h5>
                <span className="font-poppins font-medium text-text2-black leading-6 text-base">
                  {data?.data?.productPriceQuantity?.totalQuantity}
                </span>
              </div>
              {/* Subtotal*/}
              {/* Shipping Fee */}
              <div className="w-[400px] border-b-[3px] border-solid border-b-slate-300 pb-4 flex items-center justify-between">
                <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  Shipping fee:
                </h5>
                <span className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  $0
                </span>
              </div>
              {/* Shipping Fee*/}
              {/* Total amount  */}
              <div className="w-[400px] flex items-center justify-between">
                <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  total price:
                </h5>
                <span className="font-poppins font-medium text-text2-black leading-6 text-base">
                  ${data?.data?.productPriceQuantity?.totalPrice}
                </span>
              </div>
              {/* Total amount */}
            </div>
            <Link
              to={"/checkout"}
              className="flex items-center justify-center my-10 "
            >
              <button className="common_btn">Procees to checkout</button>
            </Link>
          </div>
        </div>
        {/* footer part */}
      </div>
    </div>
  );
};

export default AddToCart;
