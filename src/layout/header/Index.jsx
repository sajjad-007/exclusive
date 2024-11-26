import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import "./header.css"
const Header = () => {
  return (
    <header className=' font-poppins py-3 bg-text2-black'>
    <div className="header_main container">
      <div className='main-wrapper flex items-center justify-between'>
        <div></div>
        <div>
          <p className='text-text-faf text-[.875rem] font-normal leading-[1.313rem] capitalize'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
        </div>
        <div className=''>
          {/* <p className='text-text-faf text-[.875rem] font-normal leading-[1.313rem] capitalize'>english</p>
          <span className='text-[1.5rem] text-text-faf cursor-pointer'>
            <IoIosArrowDown />
          </span> */}
          <select name="" id="" className='text-text-faf text-[.875rem] bg-transparent font-normal leading-[1.313rem] capitalize border-none'>
            <option value="#" className='bg-transparent'>English</option>
            <option value="#">bangla</option>
            <option value="#">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header