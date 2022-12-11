import React from 'react';
import Particle from '../Home/Particle';
import { Typewriter } from "react-simple-typewriter";


const Blogs = () => {
    return (
        <div className='bg-gray-800 py-60 text-center mx-auto'>
            <Particle></Particle>
         <h1 className='text-5xl font-bold font-mono text-white
         '>Blogs  <span style={{ color: "red", fontWeight: "bold" }}>
         {/* Style will be inherited from the parent element */}
         <Typewriter
           words={["Coming Soon..."]}
           loop={20}
           cursor
           cursorStyle="_"
           typeSpeed={100}
           deleteSpeed={50}
           delaySpeed={1000}
         />
       </span></h1>
            
        </div>
    );
};

export default Blogs;