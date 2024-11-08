import React from 'react'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const RootLayOut = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <Header/>
            <Navbar/>
        </div>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayOut