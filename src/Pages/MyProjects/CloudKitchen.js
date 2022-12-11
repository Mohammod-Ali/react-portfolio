import React from "react";
import kitchen from "../../assets/kitchen.png";
import services from "../../assets/kitchen-services.png";
import addProducts from "../../assets/kitchen-add-product.png";
import { FaGithub } from "react-icons/fa";

const CloudKitchen = () => {
  return (
    <div className="bg-gray-800">
      <h1 className="text-white font-mono text-5xl p-5 ">CLOUD KITCHEN</h1>
      <div className="card  bg-neutral text-neutral-content">
        <figure className="p-10 ">
          <img className="h-5/6 w-5/6" src={kitchen} alt="bike pic" />
        </figure>
        <figure className="p-10 ">
          <img className="h-5/6 w-5/6" src={services} alt="bike pic" />
        </figure>
        <figure className="p-10 ">
          <img className="h-5/6 w-5/6" src={addProducts} alt="bike pic" />
        </figure>

        <div className="card-body ">
          <h2 className="card-title text-4xl">Cloud Kitchen Online Food Service Website.</h2>
          <p className="text-2xl">
            ● Sellers can add their food items after login.
            <br />
            ● Users can add their reviews.
            <br />
            ● Users can watch food review on the food details cart.
            <br />
            ● You can read blogs from blogs section in this site.
            <br />
            ● Technologies- React.js, React Router, Tailwind CSS, DaisyUI, Firebase, Node.js, Express.js, MongoDB.
          </p>
          <div className="card-actions justify-end">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://cloud-kitchen-21287.web.app/"
            >
              {" "}
              <button className="btn btn-outline text-white">Visit Site</button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Mohammod-Ali/cloud-kitchen-client"
            >
              {" "}
              <button className="btn btn-outline text-white">
                <FaGithub className="m-2"></FaGithub> code link
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudKitchen;
