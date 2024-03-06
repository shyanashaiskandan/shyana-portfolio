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
    <div className = "header font-quicksand fixed w-[100%] py-[1%] bg-pink text-[white]">
      <div className= 'header flex w-[80%] justify-between items-center m-auto'>
        <div className ='text-3xl name'>
          <h2>Shyana Shaiskandan</h2>
        </div>
        <div className = 'menu'></div>

          <nav>
            <ul className = 'text-sm flex gap-[20px] align-middle'>
              <li>
                <Link href = '/'>About</Link>
              </li>
              <li>
                <Link href = '/experience'>Experience</Link>
              </li>
              <li>
                <Link href = '/projects'>Projects</Link>
              </li>
              <li>
                <Link href = '/certifications'>Certifications</Link>
              </li>  
              <li>
                <Link href = '/contactme'>Contact Me</Link>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  )
}

export default Navbar
