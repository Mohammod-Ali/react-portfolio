import React from 'react';
import { FaDownload } from 'react-icons/fa';
import img from '../../assets/md1.png'

const Home = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
            
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-4 md:flex-row'>
                <div>
                    <h1>I am a Full Stack Developer</h1>
                    <p>I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong knowledge of web standards and best practices, and I am passionate about creating websites that users will find easy to use.</p>
                    <div>
                        <button className='btn btn-outline'>
                            Portfolio
                            <span className='ml-2'>
                                <FaDownload></FaDownload>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={img} alt="portfolio" />
                </div>
            </div>
        </div>
    );
};

export default Home;