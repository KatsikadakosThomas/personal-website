import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'

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

class Particle{
  constructor(effect){
    this.effect=effect;
    this.radius=5
    this.x=this.radius+Math.random() * (this.effect.width - this.radius*2);
    this.y=this.radius+Math.random() * (this.effect.height - this.radius*2);
    this.vx=Math.random()*2-1;
    this.vy=Math.random()*2-1;
  }

  draw(context){
context.beginPath();
context.arc(this.x,this.y,this.radius,0,Math.PI*2)
context.fill()
  }
update(){

  const dx=this.x - this.effect.mouse.x;
  const dy=this.y - this.effect.mouse.y;
  const distance = Math.hypot(dx, dy);
  const force =this.effect.mouse.radius / distance
  
  if(distance < this.effect.mouse.radius){
    const angle= Math.atan2(dy,dx);
    this.x += Math.cos(angle) * 8;
    this.y += Math.sin(angle) * 8;
  }


  this.x +=this.vx
  if(this.x> this.effect.width - this.radius ||this.x < this.radius) this.vx *=-1;

  this.y +=this.vy;
  if(this.y> this.effect.height - this.radius ||this.y < this.radius) this.vy *=-1;
}

}

class Effect{


  constructor(canvas){
    this.canvas=canvas;
    this.width=this.canvas.width;
    this.height=this.canvas.height;
    this.particles=[];
    this.numberOfParticles=120;
    this.createParticles();

    this.mouse={
      x:0,
      y:0,
      pressed:false,
      radius:150
    }
    window.addEventListener("mousemove",e=>{

    this.mouse.x=e.x;
    this.mouse.y=e.y;


    })
    window.addEventListener("mousedown",e=>{

    })
    window.addEventListener("mouseup",e=>{
  
    })
  }

  createParticles(){
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(this));
      
    }
  }

  handleParticles(context){
    this.connectParticles(context);
    this.particles.forEach(particle=>{
      particle.draw(context)
      particle.update();
    })
    
  }

  connectParticles(context){
    const maxDistance= 180;
    for (let a = 0; a < this.particles.length; a++) {
     for(let b=a; b <this.particles.length; b++){
      //get two particles distance on their axis
      const dx=this.particles[a].x -this.particles[b].x;
      const dy=this.particles[a].y -this.particles[b].y;
      //get the distance with hypotinuse
      const distance= Math.hypot(dx,dy);

      //if the particles are close we draw the line
      if (distance < maxDistance){
        context.save()
        const opacity=1-(distance/maxDistance)
        context.globalAlpha=opacity;
        context.beginPath();
        context.moveTo(this.particles[a].x,this.particles[a].y);
        context.lineTo(this.particles[b].x,this.particles[b].y)
        context.stroke();
        context.restore();
      }
     }
      
    }
  }

}

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

      <article className={`glass w-[700px] h-[400px] rounded shadow-xl z-30   `}>

        <figure id="image-wrapper" className='rounded-full relative w-[50px] h-[50px]'>
        <Image src="/formal-image.png" fill={true}></Image>
        </figure>

    
<h1 className='text-3xl font-bold text-center'>Hi, I am Katsikadakos Thomas</h1>
<p className='text-slate-200 font-medium text-center' >I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
      </article>
    </main>
  )
}
