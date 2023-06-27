import Image from 'next/image'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import Logo from '../assets/LOGO.png'

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
                setColor('#000000')
                setTextColor('#000000')
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
            <ul style={{color: `${textcolor}`}} className='hidden  sm:flex'>
                <li className='p-4'>
                    <Link href='/'>ABOUT</Link>
                </li>
                <li className='p-4'>
                    <Link href='/#gallery'>SERVICES</Link>
                </li>
                <li className='p-4'>
                    <Link href='/portfolio'>TECHNOLOGIES</Link>
                </li>
                <li className='p-4'>
                    <Link href='/contact'>HOW TO</Link>
                </li>           
            </ul>
            {/* button */}
                <div className='flex'>
                    <button className='border py-2 px-4 rounded-[30px] text-[12px] mx-4'>
                        CONTACT US
                    </button> 

                    <button className='border py-2 px-4 rounded-[30px] text-[12px] mx-4'>
                        JOIN HYDRA
                    </button> 
                    
                </div>
            
                      {/* mobile button */}
           <div onClick={handleNav} className='block sm:hidden z-10'>
              {nav ? <AiOutlineClose size={20} style={{color: `${textcolor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textcolor}`}}/>}
           </div>

                    {/* mobile menu */}

            <div className={nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-css bg-cover text-center ease-in duration-300'
                            : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screenbg-css bg-cover  text-center ease-in duration-300'
                            }>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/#gallery'>Gallery</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/portfolio'>Work</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                        <Link href='/contact'>Contant</Link>
                    </li>           
                </ul>
            </div>      





        </div>
    </div>
  )
}

export default Navbar