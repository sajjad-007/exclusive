import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {
  return (
    <header className=' font-poppins py-3 bg-text2-black'>
      <div className="header_main container">
        <div className='flex gap-[13.313rem] justify-end'>
          <p className='text-text-faf text-[.875rem] font-normal leading-[1.313rem] capitalize'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <div className='flex gap-1'>
            <p className='text-text-faf text-[.875rem] font-normal leading-[1.313rem] capitalize'>english</p>
            <span className='text-[1.5rem] text-text-faf cursor-pointer'>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header