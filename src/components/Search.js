import React from 'react'

function Search() {
  return (
    <div class="relative flex flex-col justify-center overflow-hidden ">
    <div class="relative rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg ">
      <div class="mx-auto max-w-md">
        <form action="" class="relative mx-auto w-max">
          <input type="search" class="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
          <svg xmlns="http://www.w3.org/2000/svg" class="peer-focus:stroke-lim-500 absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Search