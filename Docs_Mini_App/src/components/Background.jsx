import React from 'react'

function Background() {
  return (
    <div className='w-full h-screen relative z-[2] pointer-events-none'>
        <nav>
            <h3 className='text-white text-1xl text-center py-20'>Documents</h3>
        </nav>
        <h1 className='text-9xl absolute top-1/2 left-1/2 translate-x-[-50%] 
        translate-y-[-50%] font-semibold text-slate-700'>Docs.</h1>
    </div>
  )
}

export default Background