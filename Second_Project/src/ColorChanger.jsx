import React from 'react'
import { useState } from 'react'
const ColorChanger = () => {
    const [color,setColor] = useState("");
    const ChangeColor=(e)=>
    {
      console.log(e.target.value);
      setColor(e.target.value)
    }
  return (
    <div>
        <input type="color" onChange={ChangeColor}/>
        <p>{color}</p>
        <div className='w-[50vh] h-96' style={{backgroundColor:color}}></div>
    </div>
  )
}

export default ColorChanger