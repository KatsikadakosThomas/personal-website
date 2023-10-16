import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Socials from '@/components/Socials'
import Typewriter from "@/components/Typewriter"
import {Effect,Particle} from "../../../particleEffect"
import MainContainer from '@/components/MainContainer'
import Canvas from '@/components/Canvas'

const inter = Inter({ subsets: ['latin'] })

const config={
    //number of particles
    nop:500,
    maxDistance:80
}

export default function Home() {

  
  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-center ${inter.className} scrollLock  `}
    >
  
   <Canvas config={config}></Canvas>


    </main>
  )
}
