import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import burgerlogo from "../assets/burgerlogo.png";
function Navbar() {
  return (
   <section>
     <div className='cursor-pointer flex  px-6 pt-5 font-[Tahoma] h-[77px] bg-yellow-50 gap-[130px] w-full fixed top-0 z-10'>

        <ul className='flex text-[18px] font-[900] gap-4  text-yellow-950'>
            <li className="mt-[5px]"><GiHamburgerMenu /></li>
            <li className="hover:text-red-500">Order</li>
            <li className="hover:text-red-500">Offers</li>
            <li className="hover:text-red-500">Menu</li>
            <li className="hover:text-red-500">Delivery</li>
            <li className="hover:text-red-500">More</li>
        </ul>
        <ul className="flex text-[17px]  gap-2 text-yellow-950  ">
            <li className=''><img className='h-[100px]  mt-[-30px] ' src={burgerlogo} alt="burger" /></li>
            <li className="text-[22px] mt-[3px] ms-[-50px]"><IoLocationSharp /></li>
            <li className="mt-[3px] font-[900]">For item availbility</li>
            <a href="" className='text-[14px] mt-[6px] hover:no-underline underline font-[600]'>Choose your location</a>
            <button className='h-[30px] px-6 mt-1 ms-7 text-white text-[14px] hover:bg-red-800 bg-red-600 rounded-[40px] font-[900]'>Sign Up</button>
            <button className='h-[32px] px-9 mt-1 mx-2 text-white text-[14px] bg-orange-950 rounded-[40px] font-[900]'>£0.00</button>
        </ul>
        
    </div>
   </section>
  )
}

export default Navbar