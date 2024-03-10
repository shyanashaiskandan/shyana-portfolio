import React from 'react'
import Image from "next/image"
import Link from "next/link"
import temp from "./testing.png"

const certs = [
{
  name: "dkjlkjf",
  description: "djksfldkjf",
  image: "./temp",
},

]

const certifications = () => {
  return (
    <>
    <div>
      <h1 className="pt-10 font-quicksand text-pink text-5xl font-bold"><center>Certifications</center></h1>
    </div>
    <div className = ""> 
        {certs.map((work,idx) => {
          return (
          <div key={idx}>
            <div className = "m-10 pt-10 flex justify-center md:flex-row md:space-x-12 animate-mybounce">
              <div className = "">
                <Image 
                  src={temp}
                  alt=""
                  width = {300}>
                </Image>
              </div>
              <div className= "pl-5 m-auto">
                <h1 className = "text-3xl text-orange mb-2 font-bold">{work.name}</h1>
                <p className="text-l leading-7 mb-4 italic">{work.description}</p>
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