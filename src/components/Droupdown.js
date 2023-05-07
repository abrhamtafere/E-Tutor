import React from 'react'
import { Link } from 'react-router-dom';

function Droupdown({pathname}) {
  return (
    <div class="">
      <div class="dropdown inline-block relative">
      <button class="bg-dark font-semibold rounded inline-flex items-center">
        <span class="mr-1">COURSES</span>
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
      </button>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 z-20 ">
        <li class={`${pathname === '/school' ? "active" : ""}`}><Link class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/school">Grade 1-12</Link></li>
        <li class={`${pathname === '/unicourse' ? "active" : ""}`}><Link class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/unicourse">University Courses</Link></li>
        <li class={`${pathname === '/general' ? "active" : ""}`}><Link class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to="/general">General</Link></li>
      </ul>
      </div>

    </div>
  );
}

export default Droupdown