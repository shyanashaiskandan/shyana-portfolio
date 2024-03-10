import React from 'react'
import Image from "next/image"
import Link from "next/link"
import temp from "./testing.png"
import githublogo from "./githublogo.png"

const works = [
{
  name: "Portfolio Website",
  description: "djksfldkjf",
  image: "./temp",
  github: "https://www.youtube.com",
},
{
  name: "Portfolio Website",
  description: "djksfldkjf",
  image:"./temp",
  github:"https://www.youtube.com",
},
{
  name: "Portfolio Website",
  description: "djksfldkjf",
  image:"./temp",
  github:"https://www.youtube.com",
},


]

const projects = () => {
  return (
    <>
    <div>
      <h1 className="p-10 font-quicksand text-pink text-5xl font-bold"><center>Projects</center></h1>
    </div>
    <div className = "grid grid-cols-2"> 
        {works.map((work,idx) => {
          return (
          <div key={idx}>
            <div className = "m-10 flex justify-center md:flex-row md:space-x-12 animate-mybounce">
              <div className = "">
                <Image 
                  src={temp}
                  alt=""
                  width = {400}>
                  </Image>
              </div>
              <div className= "pl-5 m-auto">
                <h1 className = "text-3xl mb-2 font-bold">{work.name}</h1>
                <p className="text-l leading-7 mb-4 text-neutral-600">{work.description}</p>
                <div>
                  <Link href={work.github} target = "_blank">
                    <div className = "hover:-translate-y-1 transition-transform cursor-pointer">
                    <Image src ={githublogo} alt="" width = {25}></Image>
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