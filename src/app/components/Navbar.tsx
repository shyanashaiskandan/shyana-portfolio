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
    <div className = "header fixed w-[100%] bg-mypink text-[white]">
      <div className= 'header flex w-[80%] justify-between m-auto py- [15px]'>
        <div className ='name'>
          <h2>Shyana Shaiskandan</h2>
        </div>
        <div className = 'menu'></div>

          <nav>
            <ul className = 'flex gap-[20px]'>
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
