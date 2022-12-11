import React from "react";
import bike from '../../assets/bike.png'
import kitchen from '../../assets/kitchen.png'
import cources from '../../assets/courses.png'

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
            <a target={'_blank'} rel="noreferrer" href="https://bike-resale-2521f.web.app/"> <button className="btn btn-outline text-white">Visit Site</button></a>
           
          </div>
        </div>
      </div>
      <div  data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={kitchen} alt="Bike" />
        </figure>
        <div className="card-body bg-gray-800 text-white">
          <h2 className="card-title">Bike Resale Website</h2>
          <p>This is a Food order service Website.</p>
          <div className="card-actions justify-end">
            <a target={'_blank'} rel="noreferrer" href="https://bike-resale-2521f.web.app/"> <button className="btn btn-outline text-white">Visit Site</button></a>
           
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={cources} alt="Cloud kitchen" />
        </figure>
        <div className="card-body bg-gray-800 text-white">
          <h2 className="card-title">Course sell Website</h2>
          <p>This is a online Course selling Website.</p>
          <div className="card-actions justify-end">
            <a target={'_blank'} rel="noreferrer" href="https://web-hunt-c84c5.web.app/"> <button className="btn btn-outline text-white">Visit Site</button></a>
           
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default MyProjects;
