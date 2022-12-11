import React from "react";
import bike from '../../assets/bike.png';
import bikeAdmin from '../../assets/bike-admin.png';
import bikeOrder from '../../assets/bike-order.png';
import { FaGithub } from "react-icons/fa";

const BikeResell = () => {
  return (
    <div className="bg-gray-800">
        <h1 className='text-white font-mono text-5xl p-5 '>BIKE RESELL</h1>
      <div className="card  bg-neutral text-neutral-content">
        <figure className="p-10 " >
          <img className="h-5/6 w-5/6" src={bike} alt="bike pic" />
        </figure>
        <figure className="p-10 " >
          <img className="h-5/6 w-5/6" src={bikeAdmin} alt="bike pic" />
        </figure>
        <figure className="p-10 " >
          <img className="h-5/6 w-5/6" src={bikeOrder} alt="bike pic" />
        </figure>
        

        <div className="card-body ">
          <h2 className="card-title text-4xl">Bike Resell Website.</h2>
          <p className="text-2xl">
            ● For authentication we use firebase. <br />
            ● Users can register themselves as a seller or a buyer.
            <br />
           
            ● Admin can see the all the users.
            <br />
            ● admin can
            delete a user. 
            <br />
            ● Buyer can see there all the orders.
            <br />
            ● The seller can add their product and the
            buyer can buy the product.
            <br />           
             
             ● Technologies- React.js, React Router, Firebase, Tailwind CSS, DaisyUI, Node.js, Express.js, MongoDB.

          </p>
          <div className="card-actions justify-end">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://bike-resale-2521f.web.app/"
            >
              {" "}
              <button className="btn btn-outline text-white">Visit Site</button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Mohammod-Ali/bike-resale"
            >
              {" "}
              <button className="btn btn-outline text-white"><FaGithub className="m-2"></FaGithub> Code link</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeResell;
