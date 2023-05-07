import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Button from './Button';
import Droupdown from './Droupdown';
import Search from './Search';

function Navbar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split('/');

  let Links =[
    {name:"HOME",link:"/"},
    {name:"COURSES",link:"#"},
    {name:"DISCUSION",link:"/discussion"},
    {name:"CONTACT US",link:"/contact"},
  ];
  let [open,setOpen]=useState(false);
  
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-[#0F172B] py-4 md:py-2 md:px-10 px-7 text-white'>
      <div className='text-white font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-4xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="school"></ion-icon>
        </span>
        <Link to='/'>E-tutor</Link>
      </div>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#0F172B] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
              /* Checking the current path name using javascript ternary operator and if true adding active classname to it */
            <li key={link.name} className={`md:ml-8 text-xl md:my-0 my-7 ${pathname === link.link ? "active" : ""}`}>
              <Link to={link.link} className={`text-white hover:text-gray-400 duration-500 ${ link.name === 'CONTACT US' ? 'md:mr-10 md:hidden lg:block':''} `}>{ link.name === 'COURSES'?<Droupdown pathname={pathname}/>:link.name}</Link>
            </li>
          ))
        }
        <li className=' m-auto mr-6 md:hidden lg:block'><Search  /></li> 
        <div className='flex flex-row justify-evenly'>
          <Button className={`${pathname === '/login' ? "active" : ""}`}>
           <Link to='/login'>Login</Link>
          </Button>
          <Button className={`${pathname === '/signin' ? "active" : ""}`}>
           <Link to='/signin'>Sing Up</Link>
          </Button>
        </div>
        
      </ul>
      </div>
    </div>
  )
}

export default Navbar