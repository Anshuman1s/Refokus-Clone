import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title = "Get Started"}) {
  return (
    <div className='max-w-40 px-4 py-2 bg-zinc-300 text-black rounded-full flex items-center justify-evenly '>
        <span className='text-sm font-medium'>{title}</span>
        <BsArrowReturnRight/>
    </div>
  )
}

export default Button