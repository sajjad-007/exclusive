import React from 'react'
import Heading from '../../../component/common/commonHeading/Heading'
import Timer from '../../../component/common/commonHeading/Timer'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const FlashSales = () => {
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
            </div>
        </div>
    </section>
  )
}

export default FlashSales