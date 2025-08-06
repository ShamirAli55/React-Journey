import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
        {
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            file_size:".4mb",
            color:"green",
            download : true,
            isClose : false
        },
        {
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
            file_size:".9mb",
            color:"blue",
            download : false,
            isClose : true
        },
        {
            text:"Lorem, ipsum dolor sit amet.",
            file_size:".6mb",
            color:"blue",
            download : true,
            isClose : true
        },
    ]
  return (
        <div ref={ref} className='w-full h-screen fixed top-0 left-0 text-transparent z-[10] overflow-hidden flex gap-x-30'>
            {data.map((element)=>(
                <Card data={element} reference={ref}/>
            ))}
        </div>
  )
}

export default Foreground