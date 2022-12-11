import React from "react";
import bike from '../../assets/bike.png'
import kitchen from '../../assets/kitchen.png'
import courses from '../../assets/courses.png'
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <div  className="bg-gradient-to-b from-black via-black to-gray-800 mx-auto md:pl-16 pt-20">
      <h1 className="text-5xl text-white mb-10 font-mono">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={bike} alt="Bike" />
        </figure>
        <div className="card-body bg-gray-800 text-white">
          <h2 className="card-title">Bike Resale Website</h2>
          <p>This is a full E-Commerce Website.</p>
          <div className="card-actions justify-end">
            
            <Link to='/bikeresell' className="btn btn-outline text-white">About More</Link>
           
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={kitchen} alt="Bike" />
        </figure>
        <div className="card-body bg-gray-800 text-white">
          <h2 className="card-title">Online Food Service Website</h2>
          <p>This is a Food order service Website.</p>
          <div className="card-actions justify-end">
           
            <Link to='/cloudkitchen' className="btn btn-outline text-white">About More</Link>

           
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={courses} alt="Cloud kitchen" />
        </figure>
        <div className="card-body bg-gray-800 text-white">
          <h2 className="card-title">Course sell Website</h2>
          <p>This is a online Course selling Web Application.</p>
          <div className="card-actions justify-end">
           
            <Link to='/webhunt' className="btn btn-outline text-white">About More</Link>

          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default MyProjects;
