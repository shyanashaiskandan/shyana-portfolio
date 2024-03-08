import React from 'react'
import Image from "next/image"
import Link from "next/link"
import temp from "./governmentlogo.png"
import githublogo from "./githublogo.png"

const works = [
{
  name: "Portfolio Website",
  description: "djksfldkjf",
  image: "./temp",
  github: "https://www.youtube.com",
}

]

const projects = () => {
  return (
    <>
    <div>
      <h1 className="p-10 font-quicksand text-pink text-5xl font-bold"><center>Projects</center></h1>
    </div>
    <div className = "flex flex-col space-y-28"> 
        {works.map((work,idx) => {
          return (
          <div key={idx}>
            <div className = "flex flex-col md:flex-row md:space-x-12">
              <div className = "md:w-1/2">
                <Image 
                  src={temp}
                  alt=""
                  width = {1000}>
                  </Image>
              </div>
              <div className= "md:w-1/2">
                <h1 className = "text-4xl font-bold mb-6">{work.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600">{work.description}</p>
                <div>
                  <Link href={work.github} target = "_blank">
                    <div className = "hover:-translate-y-1 transition-transform cursor-pointer">
                    <Image src ={githublogo} alt="" width = {30}></Image>
                    </div>
                  </Link>
                  </div>
              </div>

              </div>
          </div>
          )
          })}
    </div>
    </>
  )
}

export default projects