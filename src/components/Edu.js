import React from "react";
import { qualifications } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
        </div>
        <div className="flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {qualifications.map((qualifications) => (
            <div key={qualifications.edu} className="p-2 sm:w-1/2 w-full">
              <div className="text-center px-8 py-10  z-10 w-full border-4 border-gray-800 bg-gray-900">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {qualifications.edu}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                  {qualifications.from}
                  </h1>
                  <p className="leading-relaxed"> {qualifications.university}</p>
                  <p className="leading-relaxed"> {qualifications.Location}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}