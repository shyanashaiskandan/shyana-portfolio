import React, { useState } from 'react'
import Link from "next/link"


const Navbar = () => {
  return (
    <div className= 'header flex bg-mypink'>
      <div className ='name'>
        <h2>Shyana Shaiskandan</h2>
      </div>
      <div className = 'menu'></div>

        <nav>
          <ul>
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
  )
}

export default Navbar
