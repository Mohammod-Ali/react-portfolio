import React from 'react';
import course from '../../assets/courses.png'
import webCourses from '../../assets/web-courses.png'
import blogs from '../../assets/web-blogs.png'
import { FaGithub } from 'react-icons/fa';

const WebHunt = () => {
    return (
        <div className="bg-gray-800">
            <h1 className='text-white font-mono text-5xl p-5 '>WEB-HUNT</h1>
        <div className="card  bg-neutral text-neutral-content">
          <figure className="p-10 " >
            <img className="h-5/6 w-5/6" src={course} alt="bike pic" />
          </figure>
          <figure className="p-10 " >
            <img className="h-5/6 w-5/6" src={webCourses} alt="bike pic" />
          </figure>
          <figure className="p-10 " >
            <img className="h-5/6 w-5/6" src={blogs} alt="bike pic" />
          </figure>
          
  
          <div className="card-body ">
            <h2 className="card-title text-4xl">Web Hunt Online Course Selling Website.</h2>
            <p className="text-2xl">
              ● For authentication we use firebase. <br />
              ● Users can register themselves as a seller or a buyer, admin can
              delete a user. 
              <br />
              ● Admin can see the all the users.
              <br />
              ● Buyer can see there all the orders.
              <br />
              ● The seller can add their product and the
              buyer can buy the product.
              <br />           
               ● Here is a block page, you can acquiring knowledge from this blog.
               <br />
               ● Technologies- React.js, React Router, Firebase, Tailwind CSS, DaisyUI, Node.js, Express.js, MongoDB.
  
            </p>
            <div className="card-actions justify-end">
            <a target={'_blank'} rel="noreferrer" href="https://web-hunt-c84c5.web.app/"> <button className="btn btn-outline text-white">Visit Site</button></a>
            <a target={'_blank'} rel="noreferrer" href="https://github.com/Mohammod-Ali/web-hunt-client"> <button className="btn btn-outline text-white"><FaGithub className='m-2'></FaGithub> Code Link</button></a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WebHunt;