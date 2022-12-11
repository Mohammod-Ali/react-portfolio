import React from "react";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import img from "../../assets/md1.png";
import ContactForm from "../ContactForm/ContactForm";
import MyProjects from "../MyProjects/MyProjects";
import Particle from "./Particle";

const Home = () => {
    

  return (
    <>
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
   
    <Particle></Particle>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-4 md:flex-row ">
        <div  className="flex flex-col justify-center h-full">
          <h2 className="text-2xl text-white mt-16 font-bold">Hello</h2>
          <h1 className="text-4xl sm:text-6xl font-bold text-white ">
            I'm Mohammod Ali.
          </h1>
          <h1 className="text-4xl  font-bold text-white font-mono">
            I'm a {" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Full Stack Developer", "Web Designer", "Front End Developer", "React.js Developer", "MERN Stack Developer"]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span></h1>
          <p className="text-gray-200 py-4 max-w-md font-mono">
            I am a web developer with an amazing ability to develop websites
            that are both functional and aesthetically pleasing. I have a strong
            knowledge of web standards and best practices, and I am passionate
            about creating websites that users will find easy to use.
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1VvUBx7qE9nkEV-s1zOLryHJutkgcuhyy/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="btn btn-outline md:btn-md lg:btn-lg text-white">
                Resume
                <span className="ml-2">
                  <FaDownload></FaDownload>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div  className="mx-auto my-1">
          <img
            src={img}
            alt="portfolio"
            className="mx-auto w-2/3 rounded-lg md:w-full"
          />
        </div>
      </div>
    </div>
    <MyProjects></MyProjects>
    <ContactForm ></ContactForm>
    </>
  );
};

export default Home;
