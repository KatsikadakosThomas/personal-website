"use client"
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { Effect } from "../../particleEffect";

const inter = Inter({ subsets: ['latin'] })

function Canvas({config}) {

    useEffect(() => {

        
        const canvas=document.getElementById("canvas1");
        var parent = canvas.parentElement
        const ctx=canvas.getContext("2d");
    
        canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    console.log(parent.offsetHeight)
        // canvas.width=window.innerWidth;
        // canvas.height=window.innerHeight;
        ctx.fillStyle="white";
        ctx.strokeStyle="white";
    
    
    
    
    
    
    const effect=new Effect(canvas,ctx,window,config)
    
    // effect.handleParticles(ctx);
    
    function animate(){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      effect.handleParticles(ctx)
      requestAnimationFrame(animate)
    }
    
    animate()
      }, []);
    

    return ( 

        <canvas id="canvas1" className='bg-[#051c2b] z-0 w-full top-0 left-0 absolute '>
 
        </canvas>
     );
}

export default Canvas;


