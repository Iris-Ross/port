import React from 'react';
import Experience from './Experience';
import first from './../assets/first.png';
import second from './../assets/second.png';
import third from './../assets/third.png';
import fourth from './../assets/fourth.png';

function Work() {
  return (
    <div className="mb-20 mt-[8rem] text-white flex flex-1 flex-col items-center  w-full m-auto">
    <div>
    <h1 className=" font-bold mb-3 ">Work Experience</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
      <Experience head="CIB on the Mobile" sub="Take your client onboard seamlessly with our amazing tool of onboard processes" src={first}/>
      <Experience head="CIB on the Net" sub="Take your client onboard seamlessly with our amazing tool of onboard processes" src={second}/>
      <Experience head="CIB on the Web" sub="Take your client onboard seamlessly with our amazing tool of onboard processes" src={third}/>
      <Experience head="CIB on the Links" sub="Take your client onboard seamlessly with our amazing tool of onboard processes" src={fourth}/>
    
    </div>
</div>
  );
}

export default Work;
