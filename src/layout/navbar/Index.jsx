import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { IoMdContact } from "react-icons/io";




const Navbar = () => {
    const navItem = [
        {
            id: 1,
            item: "home",
        },
        {
            id: 2,
            item: "contact",
        },
        {
            id: 3,
            item: "about",
        },
        {
            id: 4,
            item: "sign up",
        },
    ]
  return (
    <nav className='pt-10 pb-4 border-text-7d8 border-[1px] border-solid'>
        <div className='container'>
            <div className='main-wrapper flex items-center justify-between'>
                <div> 
                    <h1 className='text-text2-black font-inter text-2xl font-bold leading-[.72px] transition-all ease-linear duration-200 hover:text-primary-363 cursor-pointer'>Excluseive</h1>
                </div>
                <div>
                    <ul className='flex items-center justify-center gap-12 '>
                        {navItem.map((nav,id)=>(

                        <li key={id} className='UnderLine'>
                        <NavLink
                            to={`/${nav.item}`}
                            className= {({ isActive }) => 
                                 isActive
                                ?
                                "font-poppins text-button-red text-base font-normal leading-6 capitalize transition-all ease-linear duration-200 hover:text-hover-btn-red"
                                : 
                                "font-poppins text-text2-black text-base font-normal leading-6 capitalize transition-all ease-linear duration-200 hover:text-text-7d8"
                            }
                            >
                            {nav.item}
                        </NavLink>

                        </li>
                        ))}
                    </ul>
                </div>
                <div className='basis-1/3  relative flex items-center gap-7' >
                        <input 
                        type="text" 
                        className='py-2 px-6 bg-secondary-f5f rounded text-xs font-poppins font-normal leading-4 text-black '
                        placeholder='What are you looking for?'
                        />
                        <span className='absolute left-[50%] text-lg top-1/2 -translate-y-1/2 '>
                            <IoSearchOutline />
                        </span>
                        <div className='flex items-center gap-4'>
                            <span className='text-2xl cursor-pointer'>
                                <IoMdHeartEmpty />
                            </span>
                            <span className='text-2xl cursor-pointer numberIcon'>
                                <MdShoppingCart />
                            </span>
                            <span className='text-3xl cursor-pointer text-button-red rounded'>
                                <IoMdContact />
                            </span>
                        </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar