import ResumeContainer from "@/components/resumeContainer";
import { Effect } from "../../../particleEffect";
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

function Resume() {
   
   
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
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className} `}
    >
  
      <canvas id="canvas1" className='bg-[#051c2b] z-0 w-full h-full top-0 left-0 absolute'>
 
      </canvas>
      <ResumeContainer></ResumeContainer>
    </main>
  )
    
}

export default Resume;