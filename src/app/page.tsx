"use client"
import React from "react"
import Link from 'next/link'
import Navbar from './components/Navbar'
import Image from "next/image"
import headshot from "./self-photo.jpg"


export default function Home() {
  return (
    <section id="home" className = "mx-auto max-w-3xl sn:px-5 md:max-w-6xl">
      <div className="flex flex-col text-center items-center justify-center animate-mybounce py-16 sm:py-32 md:py-41 md:flex-row md:space-x-4">
        <div className="md:mt-2 md:w-1/2">
          <Image src={headshot} 
            alt="" width={415}
            height={415}
            className="rounded-full shadow-2xl border-solid border-4 border-teal-600 hover:border-double hover:border-7"/>

        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 md:mt-0 my-5 md:text-7xl font-quicksand text-pink text-7xl font-bold">Hi, I&#39;m Shyana!</h1>
          <p className="text-lg mt-6 mb-2 md:text-2xl">
            I&#39;m a fourth year Computer Engineering Student at the {" "}
            <span className="font-semibold text-orange">
              University of Waterloo.{" "}
            </span>
          </p>
          <p className="text-lg mb-2 md:text-2xl">
          I'm passionate about technology and constantly curious about the world of software. 
          </p>
          <p className="text-lg mb-5 md:text-2xl">
          I'm currently exploring {" "}
          <span className="font-semibold text-orange">
            full-stack development{" "}
            </span>
            , learning how to connect frontend and backend systems to build more complete solutions.
          </p>
          <p className="text-lg mb-2 md:text-3xl font-semibold text-teal-600">
          Let's build something amazing together!
          </p>
          {/* <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        {/* <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
        </Link> */}
      </div>
    </section>
  )
}
