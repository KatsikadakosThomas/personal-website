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
    ctx.fillStyle="white"
    console.log(window.innerWidth)

class Particle{
  constructor(effect){
    this.effect=effect;
    this.radius=20
    this.x=this.radius+Math.random() * (this.effect.width - this.radius*2);
    this.y=this.radius+Math.random() * (this.effect.height - this.radius*2);
    
  }

  draw(context){
context.beginPath();
context.arc(this.x,this.y,this.radius,0,Math.PI*2)
context.fill()
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

  }

  createParticles(){
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(this));
      
    }
  }

  handleParticles(context){
    this.particles.forEach(particle=>{
      particle.draw(context)
    })
  }

}

const effect=new Effect(canvas)
console.log(effect)
effect.handleParticles(ctx);

function animate(){

}

  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} `}
    >
      <canvas id="canvas1" className='bg-[#041e29]'/>
      <div className={`bg-cyan-950 w-1/2 h-[50vh] rounded shadow-xl `}>
sfdv
      </div>
    </main>
  )
}
