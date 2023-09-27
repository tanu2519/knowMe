import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { experience } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          My Work Experience
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {experience.map((project) => (
            <a
              key={experience.company}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.Location}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.company}
                  </h1>
                  <p className="leading-relaxed">{project.from}</p>
                  <p className="leading-relaxed">{project.quote}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}