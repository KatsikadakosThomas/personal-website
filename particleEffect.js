
export class Effect{


    constructor(canvas,context,window){
      this.canvas=canvas;
      this.context=context;
      this.width=this.canvas.width;
      this.height=this.canvas.height;
      this.particles=[];
      this.numberOfParticles=window.innerWidth<1024?
      window.innerWidth<600?50:90
      :
      180;
      this.createParticles();

      this.mouse={
        x:0,
        y:0,
        pressed:false,
        radius:100
      }
      window.addEventListener("mousemove",e=>{
  
      this.mouse.x=e.x;
      this.mouse.y=e.y;
  
  
      })
      window.addEventListener("resize",e=>{
    
        this.resize(e.target.window.innerWidth,e.target.window.innerHeight)
      })
 
    }
  
    createParticles(){
      for (let i = 0; i < this.numberOfParticles; i++) {
        this.particles.push(new Particle(this));
        
      }
    }

    resize(width,height){
      this.canvas.width=width;
      this.canvas.height=height;
      this.width=width;
      this.height=height;
      this.context.fillStyle="white";
      this.context.strokeStyle="white";

    }
  
    handleParticles(context){
      this.connectParticles(context);
      this.particles.forEach(particle=>{
        particle.draw(context)
        particle.update();
      })
      
    }
  
    connectParticles(context){
      const maxDistance= 140;
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

  export class Particle{
    constructor(effect){
      this.effect=effect;
      this.radius=5
      this.x=this.radius+Math.random() * (this.effect.width - this.radius*2);
      this.y=this.radius+Math.random() * (this.effect.height - this.radius*2);
      this.vx=Math.random()*1-0.5;
      this.vy=Math.random()*1-0.5;
      this.pushX = 0;
      this.pushY = 0;
      this.friction = 0.95;
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
      this.pushX += Math.cos(angle) * force;
      this.pushY += Math.sin(angle) * force;
    }
  
    this.x += (this.pushX *= this.friction) + this.vx;
    this.y += (this.pushY *= this.friction) + this.vy;
  
  
    if (this.x < this.radius){
      this.x = this.radius;
      this.vx *= -1;
  } else if (this.x > this.effect.width - this.radius){
      this.x = this.effect.width - this.radius;
      this.vx *= -1;
  }
  if (this.y < this.radius){
      this.y = this.radius;
      this.vy *= -1;
  } else if (this.y > this.effect.height - this.radius){
      this.y = this.effect.height - this.radius;
      this.vy *= -1;
  }
  }
  
  }