import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Socials from '@/components/socials'
import Typewriter from "@/components/typewriter"
import {Effect,Particle} from "../../particleEffect"
import MainContainer from '@/components/mainContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  useEffect(() => {

    
    const canvas=document.getElementById("canvas1");
    const ctx=canvas.getContext("2d");

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.fillStyle="white";
    ctx.strokeStyle="white";
    console.log(window.innerWidth)





const effect=new Effect(canvas)

// effect.handleParticles(ctx);

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  effect.handleParticles(ctx)
  requestAnimationFrame(animate)
}

animate()
  }, []);

  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className} `}
    >
  
      <canvas id="canvas1" className='bg-[#051c2b] z-0'>

      </canvas>

<MainContainer></MainContainer>
    </main>
  )
}
