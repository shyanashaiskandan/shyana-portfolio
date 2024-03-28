"use client"
import Link from 'next/link'
import Navbar from './components/Navbar'
import Image from "next/image"
import headshot from "./headshot.png"


export default function Home() {
  return (
    <main>
      <div className = "flex flex-row text-center items-center justify-center mt-24 animate-mybounce">
      <div className = "w-1/2 pr-12">
        <h1 className = "font-quicksand text-pink text-6xl font-bold pb-12">Hi, I&#39;m Shyana!</h1>
        <p className = "text-xl bg-orange text-white p-10 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className = "pl-10">
          <Image src={headshot} alt="" width={500} height={200}/>
      </div>

      </div>

    </main>
  );
}
