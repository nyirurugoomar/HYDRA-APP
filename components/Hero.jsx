import React from 'react'
import heroimage from '../assets/Hero-image.png'
import arrow from '../assets/arrow-small-right.png'
import location_icon from '../assets/Location-Icon.png'

import Image from 'next/image'





function Hero() {
  return (
       <div className='h-full w-full lg:w-screen sm:py-2 bg-fixed bg-center bg-cover bg-css '>
        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-20 '>
            <div className='flex flex-col justify-center md:items-start pt-40 '>
                
                <h1 className=' text-[2.5rem] text-start text-white font-[700]   font-Montserrat '><span className='bg-gradient-to-r from-[#E0B7E8] to-[#8176AF] bg-clip-text text-transparent '>Dive</span> Into The Depths</h1>
                <h1 className=' text-[2.5rem] text-start text-white font-[700]   font-Montserrat '>Of <span className='bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent'>Virtual Reality</span></h1>
                <p className='text-white font-Montserrat text-[1rem] text-start font-[400] w-[390px] sm:w-[400px] hidden sm:block '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.</p>

                <div className = 'flex'>
                    <button className=' px-8  h-[3rem] w-[13rem] rounded-[30px] text-[11px] mx-4 bg-gradient-to-r from-[#8D76AF] to-[#C0B7E8] text-black font-[700] mt-[4rem]'>
                     BUILD YOUR WORLD
                   </button>
                   <Image className='w-[7rem] h-[6rem] mt-[2.4rem] hidden sm:block' src={arrow} alt=""/>
                </div>
                
            </div>
            

            <div className='pt-[12rem]  md:ml-[6rem] sm:object-top'>
                <Image className='w-[30rem] h-[26rem] ' src={heroimage} alt="" />
            </div>


            
        </div>

        <div className='md:flex md:grid-col-1 mt-8 mb-12  text-white  md:mx-20 justify-center rounded-[5.625rem] h-[10rem] bg-gradient-to-r from-[#3A3456F2] to-[#211E2E]'>

          <div className='p-20 py-[4rem] my-4 flex gap-2 justify-center items-center'>
            <Image className='w-[4rem] h-[4rem]' src={location_icon} alt/>
            <div className='grid'>
            <h1 className='font-[800] text-[1.2rem] w-[200px]'>Pay Us a Visit</h1>
            <p className='tracking-wide text-[0.710rem]'>Union St, Seattle, WA 98101, United States</p>
            </div>

          </div>

          <div className='p-20 py-[4rem] my-4 flex gap-2 justify-center items-center  '>
          <Image className='w-[4rem] h-[4rem]' src={location_icon} alt/>
            <div className='grid '>
            <h1 className='font-[700] text-[1.2rem] w-[200px]'>Give Us a Call</h1>
            <p className='tracking-wide text-[0.710rem]'>(110) 1111-67584</p>
            </div>

          </div>

          <div className='p-20 py-[4rem] my-4 flex gap-2 justify-center items-center'>
          <Image className='w-[4rem] h-[4rem]' src={location_icon} alt/>
            <div className='grid '>
            <h1 className='font-[700] text-[1.2rem] w-[200px]'>Send Us a Message</h1>
            <p className='tracking-wide text-[0.710rem]'>Contact@HydraVTech.com</p>
            </div>

          </div>
          </div>
      </div>
  )
}

export default Hero