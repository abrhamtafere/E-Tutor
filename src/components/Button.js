import React from 'react'

const Button = (props) => {
  return (
    <button className={` ring-2 ring-[#E0B322] text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-[#D1A825] 
    duration-500 ${props.style}`}>
      {props.children}
    </button>
  )
}

export default Button