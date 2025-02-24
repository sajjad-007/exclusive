import React from 'react'
import Heading from '../../../component/common/commonHeading/Heading'
import Timer from '../../../component/common/commonHeading/Timer'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ProductCart from '../../../component/common/commonHeading/ProductCart'
import Slider from "react-slick";

const FlashSales = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  //arrows right and left 
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", position: 'absolute',top: '-60px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", position: 'absolute',top: '-60px', right: '15px'}}
        onClick={onClick}
      />
    );
  }
  return (
    <section className='pb-16'>
        <div className="container">
            <div className="main_wrapper">
              <div className='headPart flex items-end' >
                {/* heading */}
                <div className='w-[30%]'>
                    <Heading title="today's" description=" flash sales"/>
                </div>
                {/* Timer */}
                <div className='mb-[5px] w-[50%]'><Timer/></div>
                {/* arrow */}
                <div className='flex gap-2 justify-end w-[20%] cursor-pointer'>
                  <div className=' bg-secondary-f5f rounded-3xl h-12 w-12 flex items-center justify-center hover:bg-black hover:text-text-faf transition-all ease-linear duration-300'>
                    <span className='text-lg'>
                      <FaArrowLeft />
                    </span>
                  </div>
                  <div className=' bg-secondary-f5f rounded-3xl h-12 w-12 flex items-center justify-center hover:bg-black hover:text-text-faf transition-all ease-linear duration-300'>
                    <span className='text-lg'>
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
              <div className="slider-container mt-10">
                <Slider {...settings}>
                  {[...new Array(5)].map((_,index)=>(
                    <div className='mr-[30px]'>
                      <ProductCart/>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FlashSales