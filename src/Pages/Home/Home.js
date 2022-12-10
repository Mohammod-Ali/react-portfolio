import React from 'react';
import { FaDownload } from 'react-icons/fa';
import img from '../../assets/md1.png'

const Home = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
            
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full'>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white mt-16'>I am a Full Stack Developer</h1>
                    <p className='text-gray-200 py-4 max-w-md'>I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong knowledge of web standards and best practices, and I am passionate about creating websites that users will find easy to use.</p>
                    <div>
                        <a href="https://drive.google.com/file/d/1VvUBx7qE9nkEV-s1zOLryHJutkgcuhyy/view?usp=sharing" target={'_blank'} rel="noreferrer">
                        <button className='btn btn-outline md:btn-md lg:btn-lg text-white'>
                            Resume
                            <span className='ml-2'>
                                <FaDownload></FaDownload>
                            </span>
                        </button>
                        </a>
                    </div>
                </div>
                <div>
                    <img src={img} alt="portfolio" className='mx-auto w-2/3 rounded-lg md:w-full' />
                </div>
            </div>
        </div>
    );
};

export default Home;