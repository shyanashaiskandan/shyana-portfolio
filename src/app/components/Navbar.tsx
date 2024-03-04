'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link"



const Navbar = () => {
  const [header, setHeader] = useState(false); 

  const scrollHeader = () => {

    if (window.scrollY >= 20) {
      setHeader(true)
    }
    else {
      setHeader(false)
    }
  }

  useEffect(()=> {
    window.addEventListener('scroll', scrollHeader)

    return ()=> {
      window.addEventListener('scroll', scrollHeader)
    }
  }, [])
  return (
    <div className = "header font-quicksand fixed w-[100%] h-[6%] bg-pink text-[white]">
      <div className= 'header flex w-[80%] justify-between m-auto '>
        <div className ='text-3xl md:py-3 name'>
          <h2>Shyana Shaiskandan</h2>
        </div>
        <div className = 'menu'></div>

          <nav>
            <ul className = 'text-sm flex gap-[20px] md:py-5'>
              <li>
                <Link href = ''>About</Link>
              </li>
              <li>
                <Link href = ''>Experience</Link>
              </li>
              <li>
                <Link href = ''>Projects</Link>
              </li>
              <li>
                <Link href = ''>Certifications</Link>
              </li>  
              <li>
                <Link href = ''>Contact Me</Link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  )
}

export default Navbar
