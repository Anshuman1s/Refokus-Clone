import React from 'react'
import NavBar from './NavBar'
function Work() {
    var images = [
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"50%",left:"50%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"56%",left:"44%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"45%",left:"56%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"60%",left:"53%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"43%",left:"40%",isActive:false},
        {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"65%",left:"55%",isActive:false}, 
    ]
  return (
    <div className='w-full '>
        <div className="max-w-screen-xl mx-auto relative">
            <h1 className='text-[30vw] leading-none text-center font-medium tracking-tight select-none'>Work</h1>
        <div className="w-full h-full  absolute top-0">
          {images.map((elem,index)=>(elem.isActive && (<img className='w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top:elem.top, left:elem.left}} alt="" />)))}
        </div>
        </div>
    </div>
  )
}

export default Work