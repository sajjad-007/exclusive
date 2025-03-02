import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Heading from "./Heading";
import Timer from "./Timer";
import ProductCart from "./ProductCart";
import ProductSkeleton from "../../helpers/ProductSkeleton";

const ProductCommonLayouts = ({
  ProductCart = () => <ProductSkeleton/>,
  timeStamp = false,
  timeOffer = 0,
  isArrow = false,
  heading = "today's sales",
  description = "flash sales",
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //arrows right and left
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          position: "absolute",
          top: "-60px",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          position: "absolute",
          top: "-60px",
          right: "15px",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <div>
      <section className="pb-16">
        <div className="container">
          <div className="main_wrapper">
            {/* head section */}
            <div className="headPart flex items-end">
              {/* heading */}
              <div className="w-[30%]">
                <Heading title={heading} description={description} />
              </div>
              {/* Timer */}
              <div className="mb-[5px] w-[50%]">
                {timeStamp && <Timer timeOffer={timeOffer} />}
              </div>
              {/* arrow */}
              {isArrow && (
                <div className="flex gap-2 justify-end w-[20%] cursor-pointer">
                  <div className=" bg-secondary-f5f rounded-3xl h-12 w-12 flex items-center justify-center hover:bg-black hover:text-text-faf transition-all ease-linear duration-300">
                    <span className="text-lg">
                      <FaArrowLeft />
                    </span>
                  </div>
                  <div className=" bg-secondary-f5f rounded-3xl h-12 w-12 flex items-center justify-center hover:bg-black hover:text-text-faf transition-all ease-linear duration-300">
                    <span className="text-lg">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              )}
            </div>
            {/* slider section */}
            <div className="slider-container mt-10">
              <Slider {...settings}>
                {[...new Array(5)].map((_, index) => (
                  <div className="mr-[30px]">
                    <ProductCart />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCommonLayouts;
