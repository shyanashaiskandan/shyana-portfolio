import React from 'react'
import Image from "next/image"
import Link from "next/link"
import photobooth from "./photo-booth-photo.jpg"
import portfolio from "./portfolio-photo.png" // Import actual image files
import githublogo from "./githublogo.png"
import geoquiz from "./geo-quiz-photo.png"

const works = [
  {
    name: "Photo Booth Simulator",
    description: "Raspberry Pi, Python, Flask",
    image: photobooth, // Use the imported image directly
    github: "https://github.com/shyanashaiskandan/photobooth_simulator",
  },
  {
    name: "Geography Quiz",
    description: "MongoDB, Express.JS, React, Node.JS, Bootstrap CSS",
    image: geoquiz, // Reuse or import another image
    github: "https://github.com/shyanashaiskandan/geography_quiz",
  },
  {
    name: "Portfolio Website",
    description: "React, Next.JS, Tailwind CSS, Chakra UI",
    image: portfolio, // Another imported image
    github: "https://github.com/shyanashaiskandan/shyana-portfolio",
  },

]

const Projects = () => {
  return (
    <>
      <div>
        <h1 className="p-10 font-quicksand text-pink text-6xl font-bold">
          <center>Projects</center>
        </h1>
      </div>
      <div className="grid grid-cols-2">
        {works.map((work, idx) => {
          return (
            <div key={idx}>
              <div className="m-10 flex justify-center md:flex-row md:space-x-12 animate-mybounce">
                <div className="">
                  <Image src={work.image} alt="" width={350} className = "border-solid border-4 border-teal-600 hover:border-double hover:border-7" />
                </div>
                <div className="pl-5 m-auto">
                  <h1 className="text-2xl text-orange mb-2 font-bold">{work.name}</h1>
                  <p className="text-l leading-7 mb-4 italic">{work.description}</p>
                  <div>
                    <Link href={work.github} target="_blank">
                      <div className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <Image src={githublogo} alt="" width={25} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;