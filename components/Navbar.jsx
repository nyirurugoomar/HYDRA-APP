import Image from 'next/image'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Logo from '../assets/LOGO.png'
import hamburger from '../assets/Hamburger-Button.png'

function Navbar() {
    const [nav,setNav] = useState(false)
    const [color,setColor] = useState('transparent')
    const [textcolor,setTextColor] = useState('white')
     
    function handleNav(){
        setNav(!nav)
    }

    useEffect(()=>{ 
        function changeColor(){
            if(window.scrollY >=90){
                setColor('transparent')
                setTextColor('white')
            }else{
                setColor('000000')
                setTextColor('#ffffff')
            }
        }
        window.addEventListener('scroll',changeColor);
    },[]);
  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-2 text-white'>
            <Link href='/'>
              <Image src={Logo} className='w-[9rem] h-[5rem]'/>
            </Link>
            <ul style={{color: `${textcolor}`}} className='hidden  sm:flex '>
                <li className='p-8 text-[12px] font-[700]'>
                    <Link href='/'>ABOUT</Link>
                </li>
                <li className='p-8 text-[12px] font-[700]'>
                    <Link href='/'>SERVICES</Link>
                </li>
                <li className='p-8 text-[12px] font-[700]'>
                    <Link href='/'>TECHNOLOGIES</Link>
                </li>
                <li className='p-8 text-[12px] font-[700]'>
                    <Link href='/'>HOW TO</Link>
                </li>     
                     
            </ul>

            <div className='hidden  sm:flex px-8 py-2'>
                    <button className='border-2 h-[2rem]  px-8 rounded-[30px] text-[11px] mx-4 font-[700] '>
                        CONTACT US
                    </button> 

                    <button className=' px-8  h-[2rem] rounded-[30px] text-[11px] mx-4 bg-gradient-to-r from-[#8D76AF] to-[#C0B7E8] text-black font-[700]'>
                
                        JOIN HYDRA
                    </button> 
                    
                </div> 
            {/* button */}
                
            
                      {/* mobile button */}
           <div onClick={handleNav} className='block sm:hidden z-10'>
              {nav ? <AiOutlineClose size={40} style={{color: `${textcolor}`}}/> : <Image src={hamburger} className='w-[3rem] h-[2rem]'  style={{color: `${textcolor}`}}/>}
           </div>

                    {/* mobile menu */}

            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-css bg-cover text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screenbg-css bg-cover  text-center ease-in duration-300'
                            }>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>About</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Services</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>How To</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Contant</Link>
                    </li>      
                    <div className='flex px-8 py-2'>
                    <button className='border h-[2rem]  px-8 rounded-[30px] text-[11px] mx-4 '>
                        CONTACT US
                    </button> 

                    <button className=' px-8  h-[2rem] rounded-[30px] text-[11px] mx-4 bg-[#8D76AF] text-black'>
                        JOIN HYDRA
                    </button> 
                    
                </div>
                </ul>
            </div>      





        </div>
    </div>
  )
}

export default Navbar