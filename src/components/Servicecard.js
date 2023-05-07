import React from 'react'
import { Link } from 'react-router-dom';

function Servicecard({id, title, description, link, img}) {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg p-5 ">
        <img class="w-full" src={img} alt="Sunset in the mountains"/>
        <div className='hover:bg-black servcard'>
          <div class="px-6 py-4 ">
          <div class="font-bold text-xl mb-2 text-[#D1A825]">{title}</div>
            <p class="text-gray-700 text-base text">{description}</p>
          </div>
          <div class="px-6 pt-4 pb-2 text-end hover:bg-black ">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-[#D1A825] hover:text-white cursor-pointer ring ring-offset-2"><Link to={link}>Read more...</Link></span>
          </div>
        </div>
        
       </div>
    </>
  )
}

export default Servicecard