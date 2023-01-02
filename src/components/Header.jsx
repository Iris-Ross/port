import React from 'react';
import me from './../assets/Me.png'
function Header() {
  return (
    <div className='w-full pt-[70px] pl-[100px] pr-[100px]' id="Header">
      <div className='inline-block md:flex items-center text-center md:text-left w-full m-auto flex-1'>
        <img src={me} className="m-auto w-[70%]" />
        
        <div className=' w-full'>
          <h3 className='text-h1Color'> A Designer who</h3>
          <h2 className=" text-h1Color text-3xl">Judges a book by its <span className='text-purpleText  border-white border-2 rounded-full p-2'>cover</span> </h2>
          <h5 className='text-h1Color opacity-7 text-lg md:text-xs'> because if the cover does not impress you, what else can </h5>
        </div>
      </div>
      
      <div className='text-center md:text-left md:ml-[60px] text-h1Color m-auto w-full items-center mt-10 md:mt-0'>
          <h2 className="text-5xl" id="About">I am a Software Engineer.|</h2>
           <h3 className='mb-5'>Currently, I am a Software Engineer at  Facebook,</h3>
           <h3 className="w-full lg:w-[60%]">
            A self-taught UI/UX designer, functioning in the industry for 3+ years now.I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.
           </h3>
      </div>
    </div>
  );
}

export default Header;
