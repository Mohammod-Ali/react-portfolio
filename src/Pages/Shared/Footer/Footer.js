import React from 'react';
import img from '../../../assets/md1.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-gray-800 text-primary-content">
  <div>
    <img className='w-2/5 rounded-full' src={img} alt="footer-img" />
    <p className="font-bold">
      Mohammod Ali's <br/>Portfolio
    </p> 
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
 
</footer>
    );
};

export default Footer;