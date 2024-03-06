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
    <div className = "header font-quicksand flex w-[100%] h-[7%] bg-pink justify-between m-auto text-[white] items-center">
        <div className ='text-3xl text-bold name pl-[50px]'>
          <h2>Shyana Shaiskandan</h2>
        </div>
          <nav>
            <ul className = 'text-sm flex gap-[30px] align-middle pr-[50px]'>
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
  )
}

export default Navbar
