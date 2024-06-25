import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {
    var Products =[
        {name:"artitel",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:false},
        {name:"TTR",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:false},
        {name:"YIR 2022",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:true},
        {name:"Yahoo",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:true},
        // {name:"",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:false},
    ]
const [pos,setPostion] = useState(0)
const mover = (val)=>{
  setPostion(val*18)
}
    
  return (
    <div className='mt-32 relative'>
        {Products.map((val,index)=> <Product val={val} key={index} mover={mover} count={index}/>)}
      <div className=" w-full h-full absolute top-0 pointer-events-none">
        <motion.div initial={{y: pos, x:"-50%"}} animate={{y:pos + `rem`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.5}} className="overflow-hidden absolute w-[32rem] h-[18rem] bg-white left-[45%] ">
        <motion.div animate={{y: -pos + `rem`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.5}} className=" w-full h-full bg-sky-500"></motion.div>
        <motion.div animate={{y: -pos+ `rem`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.5}} className=" w-full h-full bg-sky-500"></motion.div>
        <motion.div animate={{y: -pos + `rem`}} transition={{ease:[0.45, 0, 0.55, 1],duration:.5}} className=" w-full h-full bg-sky-500"></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products