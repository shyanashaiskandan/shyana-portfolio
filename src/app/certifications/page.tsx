import React from 'react'
import Image from "next/image"
import Link from "next/link"
import temp from "./testing.png"
import docker from "./docker.png"
import kubernetes from "./kubernetes.png"

const certs = [
{
  name: "Introduction to Docker",
  description: "Issued by: Google Cloud Training",
  image: docker,
  link: "https://coursera.org/share/80a6a3498436f529ec6a3463479de705"
},
{
  name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
  description: "Issued by: IBM",
  image: kubernetes,
  link: "https://coursera.org/share/2af604344d6e9378779d0e546b2d9055"
},

]

const certifications = () => {
  return (
    <>
    <div>
      <h1 className="pt-10 font-quicksand text-pink text-6xl font-bold"><center>Certifications</center></h1>
    </div>
    <div className = ""> 
        {certs.map((work,idx) => {
          return (
          <div key={idx}>
            <div className = "m-10 py-10 pl-10 flex md:flex-row md:space-x-12 animate-mybounce border-solid border-4 border-teal-600">
              <div className = "">
                <Link href={work.link} target="_blank">
                <Image 
                  src={work.image}
                  alt=""
                  width = {150}
                  className = "center">
                </Image>
                </Link>
              </div>
              <div className= "pl-5 m-auto">
                <h1 className = "text-3xl text-orange mb-2 font-bold">{work.name}</h1>
                <p className="text-l leading-7 italic">{work.description}</p>
              </div>

              </div>
          </div>
          )
          })}
    </div>
    </>
  )
}

export default certifications