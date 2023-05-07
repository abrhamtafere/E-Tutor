import React from 'react'
import History from '../components/History'
import Landing from '../components/Landing'
import Popular from '../components/Popular'
import Service from '../components/Service'
import Teacher from '../components/Teacher'

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
      <div>
        <Teacher />
      </div>
      <div>
        <Popular />
      </div>
      <div>
        <History />
      </div>
    </>
  )
}

export default Home