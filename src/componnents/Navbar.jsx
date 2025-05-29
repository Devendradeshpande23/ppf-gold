import React, { useState } from 'react'
import logo from '../images/logo/logo1.webp'
import garwareLogo from '../images/logo/garware-logo.webp'
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {
    const [showMenu,setShowMenu]=useState()

    return (
        <div className=''>
            <nav className='w-full h-[clamp(5rem,8vw,6rem)] bg-black fixed shadow-md z-50 flex items-center text-white justify-between '>
                <div className='flex items-center text-white' >
                    <a href="../App.jsx"><img src={logo} className='w-[clamp(60px,5vw,120px)]' alt="logo" /></a>
                    
                    <div className='text-center ' >
                        <h1 className='font-bold text-[clamp(1.2rem,2.5vw,2rem)] ' >Shyamsundar Corporation</h1>
                        <p className='text-[clamp(0.7rem,2.5vw,1.2rem)] font-light ' >Distributor for Garware  Hi-Tech Films</p>
                    </div>
                    <img src={garwareLogo} className='hidden md:flex ml-7 w-[clamp(60px,20vw,200px)] ' alt="garwarelogo" />
                </div>
                <div className="md:hidden">
                    <button onClick={() => setShowMenu(!showMenu)}
                        className="text-2xl p-1">
                        <DehazeIcon />
                    </button>
                    {/* Dropdown for mobile */}
                    {showMenu && (
                        <li className=' absolute right-4 top-full mt-2 bg-black shadow rounded flex flex-col gap-2 p-2 z-50 ' >
                            <ul className=' px-4 py-2 bg-gray-200 text-xl text-black rounded'><a href="../assets/Pages/Home.jsx" >Home</a></ul>
                            <ul className=' px-4 py-2 bg-gray-200 text-xl text-black rounded'><a href="../assets/Pages/Products.jsx">Products</a></ul>
                            <ul className=' px-4 py-2 bg-gray-200 text-xl text-black rounded'><a href="../assets/Pages/Gallery.jsx">Gallery</a></ul>
                            <ul className=' px-4 py-2 bg-gray-200 text-xl text-black rounded'><a href="../assets/Pages/ContactUs.jsx">Contact Us</a></ul>
                        </li>
                    )}
                </div>
                <div>
                    <li className='hidden md:flex text-[clamp(1.2rem,2.5vw,1.6rem)] mr-5 ' >
                        <ul className='mr-5 hover:text-gray-400 transition-colors ease-in-out font-light'><a href="../assets/Pages/Home.jsx">Home</a></ul>
                        <ul className='mr-5 hover:text-gray-400  transition-colors ease-in-out font-light'><a href="../assets/Pages/Products.jsx">Products</a></ul>
                        <ul className='mr-5 hover:text-gray-400  transition-colors ease-in-out font-light'><a href="../assets/Pages/Gallery.jsx">Gallery</a></ul>
                        <ul className='mr-5 hover:text-gray-400  transition-colors ease-in-out font-light'><a href="../assets/Pages/ContactUs.jsx">Contact Us</a></ul>
                    </li>
                </div>

                

            </nav>

        </div>
    )
}

export default Navbar