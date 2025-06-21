import { useFormik } from "formik";
import React from "react";
import RegValidation from "../../validation/auth/RegValidation.jsx";
import { toastError, toastSuccess } from "../../component/utility/toastify";
import { axiosinstance } from "../../../helper/axios.js";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [showHide, setShowHide] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    oldPass: "",
    newPassword: "",
    confirmPassword: "",
    termAccept: false,
  };
  const Formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      const { email, oldPass, newPassword, confirmPassword, termAccept } =
        values;
      if (!termAccept) {
        toastError("Accept our Terms & Condtions");
      }
      setLoading(true);
      try {
        const response = await axiosinstance.post("forgetPassword", {
          email: email,
          oldPass: oldPass,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        });
        if (response.statusText.toLowerCase === "OK".toLowerCase) {
          toastSuccess(response.data.message);
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
        console.log(response);
      } catch (error) {
        console.error("Error From axios", error);
        if (error?.response) {
          console.error("Server response error:", error?.response?.data);
          toastError(error?.response?.data?.message);
        }
      } finally {
        setLoading(false);
      }
    },
  });
  //Hide and show btn
  const handleHideShow = () => {
    setShowHide(!showHide);
  };
  return (
    <section className=" min-h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center w-full sm:max-w-md">
        <div className="shadow-2xl w-full p-6 bg-white rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-4 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form onSubmit={Formik.handleSubmit} className="space-y-4">
            {/* Email part End*/}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={Formik.handleChange}
                value={Formik.values.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            {/* Email part start */}

            {/* Old password part Start  */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current Password
              </label>
              <input
                type={`${showHide ? "text" : "password"}`}
                name="oldPass"
                id="oldPass"
                placeholder="••••••••"
                onChange={Formik.handleChange}
                value={Formik.values.oldPass}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required
              />
              {showHide ? (
                <span
                  className="absolute right-[5%] top-[50%] translate-y-[20%]  text-xl cursor-pointer text-primary-fff"
                  onClick={handleHideShow}
                >
                  <IoEye />
                </span>
              ) : (
                <span
                  className="absolute right-[5%] top-[50%] translate-y-[20%] text-xl cursor-pointer text-primary-fff"
                  onClick={handleHideShow}
                >
                  <FaEyeSlash />
                </span>
              )}
            </div>
            {/* Old Password part End */}

            {/* New password part Start  */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="••••••••"
                onChange={Formik.handleChange}
                value={Formik.values.newPassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            {/* New password part End  */}
            {/* Confirm password part Start */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="••••••••"
                onChange={Formik.handleChange}
                value={Formik.values.confirmPassword}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            {/* Confirm password part end  */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termAccept"
                  name="termAccept"
                  aria-describedby="terms"
                  type="checkbox"
                  onChange={Formik.handleChange}
                  value={Formik.values.termAccept}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium  text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            {/* Confirm password part End */}

            {/*Button Start  */}
            {loading ? (
              <ThreeDots
                visible={true}
                height="60"
                width="60"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              <button
                type="submit"
                className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-primary-fff bg-bg-gray-700 text-primary-fff capitalize ml-28 "
              >
                change password
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
