import React from 'react'
import Cardanimated from './Cardanimated'
import Cardhover from './Cardhover'

function History() {
  return (
    <div>
      <div className='bg-black p-10 mt-5 text-center'>
        <p className='text-3xl font-bold text-white'>Models from History</p>
      </div>
      <div class="flex min-h-screen items-center justify-center bg-neutral-800">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Cardanimated />
          <Cardanimated />
          <Cardanimated />
        </div>
      </div>
    </div>
  )
}

export default History