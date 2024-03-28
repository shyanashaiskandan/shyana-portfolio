"use client"
import Link from 'next/link'
import Navbar from './components/Navbar'
import Image from "next/image"
import headshot from "./headshot.png"


export default function Home() {
  return (
    <main>
      <div className = "flex flex-row text-center items-center justify-center mt-24 ">
      <div className = "w-1/2 pr-10">
        <h1 className = "font-quicksand text-pink text-6xl font-bold pb-10">Hi, I&#39;m Shyana!</h1>
        <p className = "text-xl bg-orange text-white">djflsjflds jflsdkjfl dsjflsjdfsld jfssdfjl ssdfkjldskjfl skd jflsjf</p>
      </div>
      <Image src={headshot} alt="" width={500} height={200}/>

      </div>

    </main>
  );
}
