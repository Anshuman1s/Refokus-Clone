import React from 'react'

function Nav() {
  return (
    <nav className='w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
            <a href="/create" className='py-2 px-5 border rounded  border-red-200 text-blue-400'>Add new Product</a>
            <hr className='w-[80%] my-3'/>
            <h1 className='text-2xl w-[80%] '>Catagory Filter</h1>
            <ul className=' w-[80%] '>
                <li className=' mb-3 flex items-center'>
                    <span className='ml-2 rounded-full  w-[15px] h-[15px] bg-blue-300 mr-3'></span>
                    Cat 1</li>
                <li className=' mb-3 flex items-center'>
                    <span className='ml-2 rounded-full  w-[15px] h-[15px] bg-yellow-300 mr-3'></span>
                    Cat 1</li>
                <li className=' mb-3 flex items-center'>
                    <span className='ml-2 rounded-full  w-[15px] h-[15px] bg-red-300 mr-3'></span>
                    Cat 1</li>
                <li className=' mb-3 flex items-center'>
                    <span className='ml-2 rounded-full  w-[15px] h-[15px] bg-green-300 mr-3'></span>
                    Cat 1</li>
                
            </ul>
        </nav>
  )
}

export default Nav