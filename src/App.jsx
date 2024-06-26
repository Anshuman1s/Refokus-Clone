// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import FullData from './Components/FullData';

// function App() {
//   return (
//     <div className='h-screen w-screen flex'>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/fulldata/:id" element={<FullData/>}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;

// Project 1 Refokus website 

import React from 'react'
import NavBar from './Project/NavBar'
import Work from './Project/Work'
import Stripes from './Project/Stripes'
import Products from './Project/Products'
import Marquees from './Project/Marquees'
import Cards from './Project/Cards'
import Footer from './Project/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full  bg-zinc-900 text-white font-[Satoshi variable]">
      <NavBar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App