// import React from 'react'
import React, { useState } from 'react'
import {homeCategory} from  "../../../data/data"
import { FaChevronRight } from 'react-icons/fa'
import heroImg from "../../../assets/hero_img.jpg"
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
const HeroSection = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      autoplay: true,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            position: "absolute",
            left: "38%",
            bottom: "12px",
            // transform: "translateX(-50%)"
          }}
        >
          <ul style={{ margin: "0px", display:"flex", gap: "0px",  }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        i == currentSlide ? (<div
          style={{
            width: "13px",  
            height: "13px",  
            backgroundColor: "#DB4444",
            border: "3px #FFFFFF solid",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        >
        </div>) : (<div
          style={{
            width: "13px",  
            height: "13px",  
            backgroundColor: "#7D8184",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        >
        </div>)
        
      ),
      afterChange: function(currentSlide) {
        setCurrentSlide(currentSlide)
        
      }
    };
    return (
      <section>
          <div className='container'> 
              <div className="Main_wrapper flex mb-36">
                {/* hero section side category */}
                <div className='w-[21%] border-r-2 border-r-text-7d8 pt-10 flex flex-col gap-4 '>
                  {homeCategory?.map((item,key)=>(
                    <>
                      <div className=' group transition-all ease-linear duration-200 flex items-center justify-between mr-4 cursor-pointer'>
                        <h4 className='text-lg capitalize font-normal font-poppins leading-6 text-text2-black pl-0 group-hover:text-text-7d8 group-hover:pl-2 transition-all ease-linear duration-200 '>{item.category}</h4>
                          {/* if sub category exist then use arrow */}
                          {item.subCategory && 
                             (
                              <span className='group-hover:text-text-7d8 transition-all ease-linear duration-200 '>
                                <FaChevronRight />
                              </span>
                             )
                          }
                      </div>
                    </>
                  ))}
                </div>

                {/* hero section Slider image*/}
                <div className='w-[79%]  ml-11 mt-10 h-[340px] overflow-hidden cursor-grab'>  
                  <div className="slider-container h-[350px] w-full object-cover">
                      <Slider {...settings}>
                        {/* an emty array for map */}
                        {[...new Array(10)].map((_,index)=>(
                          <div key={index} className='h-[340px] w-full object-cover flex'>
                            <img src={heroImg} alt="not found"  className='h-full w-full object-cover'/>
                          </div>
                        ))}
                      </Slider>
                    </div>
                </div>
              </div>
          </div>
      </section>
    )
}

export default HeroSection