import React from 'react'
import { useState } from 'react';
const App = () => {

  const [color,setColor] = useState("olive");

      return(
        <>
          <div className='w-full h-screen' style={{backgroundColor:color}}></div>
          <div className='fixed flex items-center justify-center bottom-12 inset-x-0'>
            <div className='flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2
            rounded-full'>
              <button className='outline-none px-4 ' style={{backgroundColor:'red'}}
              onClick={()=>setColor("red")}>Red</button>
              <button className='outline-none px-4 ' style={{backgroundColor:'green'}}
              onClick={()=>setColor("green")}>Green</button>
              <button className='outline-none px-4 ' style={{backgroundColor:'blue'}}
              onClick={()=>setColor("blue")}>Blue</button>
              <button className='outline-none px-4 ' style={{backgroundColor:'black',color:"white"}}
              onClick={()=>setColor("black")}>Black</button>

              </div>
          </div>
        </>
      )
}

export default App