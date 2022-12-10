import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLink = () => {
    return (
        <div className='flex flex-col md:top-[30%] left-0 fixed top-[70%]'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href='https://www.linkedin.com/in/md-ali/' className='flex justify-between items-center w-full text-white' target={'_blank'} rel="noreferrer">
                    <>LinkedIn <FaLinkedin size={30}></FaLinkedin></>
                </a></li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href='https://github.com/Mohammod-Ali' className='flex justify-between items-center w-full text-white' target={'_blank'} rel="noreferrer">
                    <>GitHub <FaGithub size={30}></FaGithub></>
                </a></li>
                <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href='https://www.facebook.com/mohammod.hp/' className='flex justify-between items-center w-full text-white' target={'_blank'} rel="noreferrer">
                    <>FaceBook <FaFacebook size={30}></FaFacebook></>
                </a></li>
                
            </ul>
        </div>
    );
};

export default SocialLink;