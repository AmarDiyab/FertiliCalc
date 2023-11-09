import React from 'react'
import logo from "../assets/logo.svg";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center bg-[#b3e8da]'>
        <Image src={logo} alt="LOGO" width={80} className='py-5 px-5' />
        <span className='text-[#f68c90] text-xl font-mono font-bold '>Fertili Calc</span>
    </div>
  )
}

export default Navbar