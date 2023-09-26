import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Socials from '@/components/Socials'
import Typewriter from "@/components/Typewriter"
import {Effect,Particle} from "../../particleEffect"
import MainContainer from '@/components/MainContainer'

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





const effect=new Effect(canvas,ctx,window)

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
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className} scrollLock `}
    >
  
      <canvas id="canvas1" className='bg-[#051c2b] z-0 w-full h-full top-0 left-0 absolute'>

      </canvas>

<MainContainer></MainContainer>
    </main>
  )
}
