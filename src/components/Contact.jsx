import React from 'react';
import {FaInstagram, FaLinkedin, FaGoogle} from 'react-icons/fa'
function Contact() {
  return (
    <div className="text-white w-[60%] m-auto mt-20 pb-20">
    <h2 className="mb-10 text-2xl">Contact</h2>
     <p >
     I am currently looking to join a cross-functional team that values improving people's lives
    through accessible design. or have a project mind Let's connect. ibrhaimmemon930@gmail.com
    
    </p>
    <div className="flex w-[30%] mt-10 justify-between">
    <FaInstagram/>
    <FaLinkedin/>
    <FaGoogle/>
    </div>
    </div>
  );
}

export default Contact;
