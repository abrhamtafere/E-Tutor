import React from 'react'
import Landing from '../components/Landing'
import Service from '../components/Service'

function Home() {
  return (
    <>
      <div className='relative home mt-19 flex flex-col'>
        <div className='mt-40'>
          <Landing />
        </div>
      </div>
      <div className='bg-white h-full'>
        <Service />
      </div>
    </>
  )
}

export default Home