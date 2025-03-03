import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoEyeOutline } from 'react-icons/io5'
import product from '../../../assets/product.svg'
import Image from '../../image/Image'
import { FaStar } from 'react-icons/fa'


const ProductCart = () => {
    
  return (
    <div className='main w-[270px]'>
        <div className="main_wrapper">
            {/* //part one */}
            <div className="img_part w-full h-[270px] mb-5 bg-text-faf rounded group relative overflow-hidden">
                <div className='px-3 py-3'>
                    <div className="item_part flex items-center justify-between">
                        <span className='py-1 px-3 bg-secondary2-db44 text-primary-fff font-poppins text-xs font-normal leading-4 tracking-tighter-[2px] rounded-sm'>-40%</span>
                            <div className='icons h-8 w-8 bg-primary-fff flex items-center justify-center rounded-[100%] hover:bg-secondary2-db44 cursor-pointer transition-all ease-linear duration-200'>
                                <div className=' text-2xl hover:text-primary-fff  transition-all ease-linear duration-200'>
                                    <CiHeart />
                                </div>
                            </div>
                    </div>
                    <div className="img_part relative">
                        <div className='img w-[172px] h-[152px]  mx-10 my-5 overflow-hidden'>
                            <Image src={product} alt='not found' className='h-full w-full object-cover'/>
                        </div>
                        <div className='img_icon absolute left-[213px] top-[-12px]'>
                            <div className='icons h-8 w-8 bg-primary-fff flex items-center justify-center rounded-[100%] hover:bg-secondary2-db44 cursor-pointer transition-all ease-linear duration-200'>
                                    <div className=' text-2xl hover:text-primary-fff transition-all ease-linear duration-200'>
                                        <IoEyeOutline />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                {/* //add to cart */}
                    <div className='absolute bottom-[-40px]  left-0  h-7 w-full bg-text2-black px-3 py-5 rounded-b-md  flex items-center justify-center capitalize group-hover:bottom-[-1px] transition-all ease-linear duration-200 cursor-pointer'>
                        <h4 className='text-primary-fff font-poppins text-[16px] font-medium leading-6'>add to cart</h4>
                    </div>
            </div>
            {/* //part two */}
            <div className="comment part flex flex-col gap-2">
                <h3 className='text-text2-black font-poppins text-lg font-medium leading-6 capitalize  w-[260px]'>hAVIT hV-g92 gamepad</h3>
                <div className='flex gap-3'>
                    <span className='font-poppins text-secondary2-db44 text-[16px] font-medium leading-6'>$120</span>
                    <span className='font-poppins text-text-7d8 text-[16px] font-medium leading-6 line-through'>$160</span>
                </div>
                <div className="start mt-2 flex">
                    {[...new Array(5)].map((_,index)=>(
                        <span className='text-xl text-yellow-300 hover:text-yellow-400 cursor-pointer'>
                            <FaStar />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCart