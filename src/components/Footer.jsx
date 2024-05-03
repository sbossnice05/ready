import React from 'react'
import { TbWorld } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='text-orange-50 px-[120px] pt-[100px] w-full pb-14  bg-red-950 h-[auto] '>
        <main className='  '>
            <div className="flex gap-[500px] pb-[40px] ">
                <ul className=''>
                    <li className="text-[28px] font-[600] font-[black]">BK® INFO</li>
                    <li><a href=""className='hover:underline'>About BK®</a></li>
                    <li><a href="" className="hover:underline">FAQs</a></li>
                    <li><a href="" className="hover:underline">Policies</a></li>
                    <li><a href="" className="hover:underline">Get in touch</a></li>
                    <li><a href="" className="hover:underline">Terms & Conditions</a></li>
                    <li><a href="" className="hover:underline">Guest Trac</a></li>
                    <li><a href="" className="hover:underline">Trademarks</a></li>
                </ul>
                <ul className=''>
                    <li className="text-[28px] font-[600] font-[black]">BK® AND YOU</li>
                    <li><a href=""className='hover:underline'>Careers</a></li>
                    <li><a href="" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="" className="hover:underline">Modern Slavery Statement</a></li>
                    <li><a href="" className="hover:underline">Tax Strategy</a></li>
                    
                </ul>
                
            </div>
            <div className="mt-12 flex gap-20 pt-[30px] pb-16 justify-between border-t-2 border-gray-100 border-b-2 border-gray-100">
                <div className="">
                    <h1 className='text-[28px] mb-4 font-[900]'>BURGER KING.</h1>
                    <p className='text-[13px]'>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</p>
                </div>
                <div className="flex gap-2 text-[24px]">
                    <span className='hover:bg-red-500'>
                        <TbWorld />
                        </span>
                        <span className='hover:bg-red-500'>
                        <RiEnglishInput />
                        </span>
                        <span className='hover:bg-red-500'>
                        <GrInstagram />
                        </span>
                        <span className='hover:bg-red-500'>
                        <AiFillFacebook />
                        </span>
                        <span className='hover:bg-red-500'><IoLogoYoutube /></span>
                        <span className='hover:bg-red-500'>
                        <FaXTwitter />
                        </span>
                </div>
            </div>

        </main>
    </footer>
  )
}

export default Footer