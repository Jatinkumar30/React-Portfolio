import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Technologies and the Frameworks I've worked on.
            
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            
            <a
              href={skills.link}
              className="sm:w-1/2 w-100 p-4">
              
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {skill.title}
                  </h2>
                  
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                  {skill.subtitle}
                  </h1>
                  <p className="leading-relaxed">{skills.description}</p>
                </div>
              </div>
            </a>

            
          ))}
        </div>
      </div>
    </section>
  );
}

