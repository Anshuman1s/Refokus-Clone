import React from 'react'
import { motion } from 'framer-motion'
function Marquee({imgurls,direction}) {
  
  return (
    <motion.div  className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
        <motion.div initial={{x:direction==='left' ? "0" : "-100%"}} animate={{x:direction==="left" ? "-100%" : "0"}} transition={{ease:"linear",duration:15,repeat:Infinity}}  className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imgurls.map(url => <img src={url} className=''/>)} 
        </motion.div>
        {/* <motion.div className="flex flex-shrink-0 gap-40 py-10 pr-10">
        {imgurls.map(url => <img src={url} className=''/>)} 
        </motion.div> */}
        <motion.div initial={{x:direction==='left' ? "0" : "-100%"}} animate={{x:direction==="left" ? "-100%" : "0"}} transition={{ease:"linear",duration:15,repeat:Infinity}}  className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imgurls.map(url => <img src={url} className=''/>)} 
        </motion.div>
    </motion.div>
  )
}

export default Marquee