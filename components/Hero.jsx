import React from 'react'
import heroimage from '../assets/Hero-image.png'
import Image from 'next/image'





function Hero() {
  return (
       <div className='h-full w-full lg:w-screen sm:py-2 bg-fixed bg-center bg-cover bg-css '>
        <div className='grid md:grid-cols-2 max-w-[1340px] m-auto mx-20 '>
            <div className='flex flex-col justify-center md:items-start pt-40 '>
                
                <h1 className=' text-[2.5rem] text-start text-white font-[700]   font-Montserrat '><span className='bg-gradient-to-r from-[#E0B7E8] to-[#8176AF] bg-clip-text text-transparent'>Dive</span> Into The Depths</h1>
                <h1 className=' text-[2.5rem] text-start text-white font-[700]   font-Montserrat '>Of <span className='bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent'>Virtual Reality</span></h1>
                <p className='text-white font-Montserrat text-[1rem] font-[400] w-[390px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.</p>

                <div>
                <button className=' px-8  h-[3rem] w-[13rem] rounded-[30px] text-[11px] mx-4 bg-gradient-to-r from-[#8D76AF] to-[#C0B7E8] text-black font-[700] mt-[4rem]'>
                
                BUILD YOUR WORLD
            </button>
                </div>
                
            </div>
            

            <div className='pt-[12rem]  md:ml-[6rem] sm:object-top'>
                <Image className='w-[30rem] h-[26rem] ' src={heroimage} alt="" />
            </div>

        </div>
      </div>
  )
}

export default Hero