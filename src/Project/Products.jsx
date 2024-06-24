import React from 'react'
import Product from './Product'

function Products() {
    var Products =[
        {name:"artitel",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:false},
        {name:"TTR",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:false},
        {name:"YIR 2022",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:true},
        {name:"Yahoo",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:true},
        // {name:"",description:"Aruq Export Product its employees continue to receive orders from customer.",live:true,case:false},
    ]
  return (
    <div className='mt-32'>
        {Products.map((val,index)=> <Product val={val}/>)}
      
    </div>
  )
}

export default Products