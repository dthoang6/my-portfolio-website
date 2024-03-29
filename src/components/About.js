import React from "react";
import tomhoangdev from "../images/tomhoangdev.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Tom.
            <br className="hidden lg:inline-block" /> I love to build user friendly application with ReactJS.
          </h1>
          <p className="mb-8 leading-relaxed">Tom is a JavaScript Developer from LosAngeles, California, USA, and is currently focusing build web application by using MERN stack.</p>
          <p className="mb-8 leading-relaxed">
            Tom received his bachelor's degree in Computer Science from <a href="https://www.cpp.edu/">Cal Poly Pomona</a> and have worked in the most exciting areas of the web application ever since.
          </p>
          <div className="flex justify-center">
            <a href="#work" className="inline-flex text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              See My Work
            </a>
            <a href="#projects" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={tomhoangdev} />
        </div>
      </div>
    </section>
  );
}
