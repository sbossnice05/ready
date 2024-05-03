import React from 'react'
import burgerred from "../assets/burgerred.jpg";
import siblge1 from "../assets/siblge1.jpg";
import crop1 from "../assets/crop1.jpg";
import darkbur1 from "../assets/darkbur1.jpg";
import chip2 from "../assets/chip2.jpg";
import crop56hand1 from "../assets/crop56hand1.jpg";
import cherritos from "../assets/cherritos.webp";
import cokedunk from "../assets/cokedunk.webp";
import kingsaver from "../assets/kingsaver.webp";
import KINGJR from "../assets/KINGJR.webp";

function Mainback() {
    return (
        <section className='bg-gray-100 text-yellow-950 mt-20 pb-8'>
            <h1 className='bg-orange-950  text-white font-[900] text-6xl text-center py-[80px] font-[sans-serif] mb-8'>
                Our Menu
            </h1>
            <main className="flex gap-5  items-center flex-col">
                <div className="flex gap-5">
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img src={siblge1} alt="" />
                        <p className='text-2xl font-[700] mt-3'>SPECIALS</p>
                    </div>
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img src={burgerred} alt="" />
                        <p className='text-2xl font-[700] mt-3'>ALL BURGERS</p>
                    </div>
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img src={crop1} alt="" />
                        <p className='text-2xl font-[700] mt-3'>FLAME-GRILLED BURGERS</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img className='h-[243px] w-[365px]' src={darkbur1} alt="" />
                        <p className='text-2xl  font-[700] mt-3'>DARK BURGER</p>
                    </div>
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img src={chip2} alt="" />
                        <p className='text-2xl font-[700] mt-3'>FAMILY &  BUNDLE</p>
                    </div>
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img src={crop56hand1} alt="" />
                        <p className='text-2xl font-[700] mt-3'>VEGGIE & MORE</p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img className='h-[243px] w-[365px]'  src={cherritos} alt="" />
                        <p className='text-2xl  font-[700] mt-3'>SIDES</p>
                    </div>
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img className='h-[243px] w-[365px]'  src={cokedunk} alt="" />
                        <p className='text-2xl font-[700] mt-3'>DRINKS & COFFEE</p>
                    </div>
                    <div className=' h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img className='h-[243px] w-[365px]' src={kingsaver} alt="" />
                        <p className='text-2xl font-[700] mt-3'>KING SAVERS</p>
                    </div>
                </div>
                    <div className=' me-[775px] h-[300px] w-[365px] rounded-[15px] overflow-hidden text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  '>
                        <img className='h-[243px] w-[365px]' src={KINGJR} alt="" />
                        <p className='text-2xl font-[700] mt-3'>KING SAVERS</p>
                    </div>
            </main>
        </section>
    )
}

export default Mainback