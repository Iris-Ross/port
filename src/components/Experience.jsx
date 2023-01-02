import React from 'react';

function Experience({head,sub,src}) {
  return (
    <div className="bg-rectangleFill flex rounded-xl  h-auto p-3  pr-4 w-[70%] m-auto flex-1 border-white ">
      <img src={src} className="md:pr-4 p-0 w-auto h-[4rem] m-auto"/>
  
      <div className="text-sm md:text-xl p-0 m-0">
       <h3 className="md:text-xl text-sm font-bold pb-2">{head}</h3>
       <p className="text-xs pb-1 ">{sub}</p>
       <button className=" rounded bg-buttonColor pl-2 pr-2 ">LEARN MORE</button>
      </div>
    </div>
  );
}

export default Experience;
