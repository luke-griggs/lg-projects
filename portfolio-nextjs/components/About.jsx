import React from "react";

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#004aad]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'> From the field to the File... </p>
          <p className='py-2 text-gray-600'> 
            Throughout high school, I dedicated a significant amount of
            time to improving my skills in the sport of baseball. However, as my
            senior year drew to a close and my time on the field came to an end,
            I realized that I wanted to redirect the effort I had invested in
            baseball towards another skill.
            </p>
            
            <p className='py-2 text-gray-600'> 
            Under the guidance of my older brother, who's also pursuing
            a career in programming, I diligently work each day towards
            achieving my goal of becoming a software engineer. I've got my
            sights set on starting my own tech company someday, using the skills
            I'll be picking up along the way.
            </p>
            
          
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img className='rounded-xl' src="https://images.unsplash.com/photo-1618389041494-8fab89c3f22b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="/" />   
        </div>
      </div>
    </div>
  );
};

export default About;
