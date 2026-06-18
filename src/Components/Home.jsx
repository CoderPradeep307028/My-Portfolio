import React from 'react';
import Pradeep from '../assets/Pradeep.jpg';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <> 
    <div className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-yellow-500 to-emerald-700">
       Pradeep
   </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-yellow-300 via-emerald-300 to-transparent mt-2"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-[10vw] py-[6rem] bg-gradient-to-br from-gray-50 via-white to-emerald-50 min-h-screen">
        
        <div className="text-center md:text-left max-w-xl space-y-6">
          <div className="flex items-center justify-center md:justify-start">
            <div className="h-[80px] w-[4px] bg-yellow-400 mr-4 rounded-full animate-pulse"></div>
            <div>
              <h1 className="text-5xl font-light text-gray-700">Hi, I'm</h1>

              
              <TypeAnimation
                sequence={['Pradeep Kumar']}
                wrapper="h2"
                speed={50}
                repeat={0} 
                className="text-6xl font-bold text-emerald-600 leading-tight"
              />

              <h3 className="text-3xl font-semibold text-yellow-500 mt-2">
                Web Developer
              </h3>
            </div>
          </div>

          <p className="text-lg text-gray-600">
            Passionate about building clean and efficient web applications. Currently based in <span className="font-medium text-emerald-700">Banur ,Punjab, India</span>.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="#contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 shadow-md"
            >
              Contact Me
            </a>
            <a
              href="/RESUME.pdf"
              download
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="rounded-full overflow-hidden border-[6px] border-yellow-400 shadow-2xl w-[300px] h-[300px] hover:scale-105 transition-transform duration-500">
            <img
              src={Pradeep}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
