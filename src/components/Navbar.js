import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Search from './Search';

function Navbar() {

  let Links =[
    {name:"HOME",link:"/"},
    {name:"COURSES",link:"/courses"},
    {name:"DISCUSION",link:"/discussion"},
    {name:"CONTACT US",link:"/contact"},
  ];
  let [open,setOpen]=useState(false);
  
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#0F172B] py-4 md:px-10 px-7 text-white'>
      <div className='text-white font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="school"></ion-icon>
        </span>
        E-tutor
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#0F172B] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
        <Search className='hidden' />
        <Button>
          Login
        </Button>
        <Button>
          Sing Up
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar