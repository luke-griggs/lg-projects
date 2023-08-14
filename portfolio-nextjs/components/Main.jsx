import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Main = () => {
  return (
    <div id='home' className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING GREAT
          </p>
          <h1 className="py-3 text-gray-700">
            Hi, I'm <span className="text-[#004aad]"> Luke</span>
          </h1>
          <h1 className="py-2 text-gray-700">An Aspiring Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a student at Washington University in St. Louis studying
            Business and Computer Science.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
          <div>
  <a href='https://www.linkedin.com/in/luke-griggs-54318a288/' target='_blank' rel='noopener noreferrer'>
    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
      <FaLinkedinIn />
    </div>
  </a>
</div>               
<div>
  <a href='https://github.com/luke-griggs?tab=repositories' target='_blank' rel='noopener noreferrer'>
    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
      <FaGithub />
    </div>
  </a>
</div>
<div>
  <a href='mailto:lukegriggs100@gmail.com?' target='_blank' rel='noopener noreferrer'>
    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
      <AiOutlineMail />
    </div>
  </a>
</div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Main;
