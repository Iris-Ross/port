import React from 'react';
import logo from './../assets/Logo.png'
import {HiBars3} from 'react-icons/hi2'
import {HiXMark} from 'react-icons/hi2'
import { useState } from 'react';


function Navbar() {
const [toggle, setToggle] = useState(false);
const handleToggle=()=>{
  setToggle(!toggle);
}
  return (
      
     
    <div className="bg-backgroundColor h-[50px] text-h1Color flex justify-between items-center md:text-lg max-w-full">
     <img src={logo} className="w-auto h-[20px] md:h-[30px] ml-4 md:ml-[300px]"/>
    

      {toggle ? <HiBars3 className="h-[50px] block md:hidden " onClick={()=>handleToggle()}/>:  
     <HiXMark className="h-[50px] block md:hidden  " onClick={()=>handleToggle()}/>}
  
      {!toggle?
      <div className='block md:hidden absolute text-h1Color bg-[#2c1250c2] border-2px right-0 top-[50px] transition-[ease] rounded-l-md drop-shadow-xl z-100 ' >
        <ul className=" text-center items-center    justify-between cursor-pointer p-10 ">
          <li className='p-5'><a href="#App">Home</a></li>
          <li className='p-5'><a href="#About">About</a></li>
          <li><a href="#Work">Lab</a></li>
          </ul>
          </div>:""}
    
      
      
     <ul className="md:flex hidden text-center  items-center md:pr-20 sm:pr-4 pl-12 relative mr-[5rem] justify-between cursor-pointer">
     <li className='mr-[60px]'><a href="#App">Home</a></li>
     <li className='mr-[60px]'><a href="#About">About</a></li>
     <li><a href="#Work">Lab</a></li>
     </ul>
    </div>
  );
}

export default Navbar;
