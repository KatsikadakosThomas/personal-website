"use client"
import { useState, useEffect } from "react"
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import { Inter } from 'next/font/google'
import FancyButton from "./FancyButton";
import skills from "../../data/skills";

const inter = Inter({ subsets: ['latin'] })

function AboutContainer() {
    const [state, setState] = useState(false);


    useEffect(() => {

        
        setState(true)
    }, [])

    return (
<article className={`glass max-w-[100%] md:max-w-[70%] lg:max-w-[80%] p-5 mt-[30px]  max-h-[70vh] lg:max-h-[85vh] overflow-auto rounded shadow-xl z-30 flex flex-col  items-center  ${state ? "show" : "noshow"} rounded-2xl ${inter.className} `}>
<h1 className='text-3xl font-bold mb-2 text-white  '><span className='text-cyan-400 '> About </span>me</h1>
<section>
            <div className='p-5 w-full'>
     
                <p className='text-slate-200 text-base' >I was born and raised in Greece and spent 11 years working as a freelance photographer and videographer. Throughout my career, a passion for computer science always burned within me. However, 
                it wasn&apos;t until the challenges posed by Covid-19 that I found the opportunity to pivot my career and pursue this passion.</p>
                <br/>
                <p className='text-slate-200 text-base' > My years as a freelancer have given me valuable experience as a business owner, allowing me to effectively communicate with clients, take on responsibility,
                 and meet deadlines consistently.

</p>
                <br/>
                <p className='text-slate-200 text-base' >Now, my primary goal is to further develop my skills as a programmer and web developer. I&apos;m always eager to explore and learn new technologies in my field and beyond.</p>
           
            </div>
</section>

<h1 className='text-3xl font-bold mb-2 text-white mt-4  '><span className='text-cyan-400 '> Skill</span>s</h1>
<div className='p-5 w-full'>
     
     <p className='text-slate-200 text-base' >Over the last four years, I have gained extensive experience in full-stack development. For the first three years, I primarily worked with Next.js,
         building and maintaining numerous websites and platforms.
         Over the past year, I have expanded my expertise to include Vue and Python actively working with them, while also rapidly deploying applications using AI-powered tools like Lovable in React and Next.js.
          Additionally, I have experience deploying websites in Linux server environments using Docker and Nginx and the Google Cloud Platform.</p>
     <br/>
     <p className='text-slate-200 text-base' >Now, I am eager to further broaden my knowledge, explore new technologies with AI, and work on diverse projects involving frameworks and languages such as  Angular, and GoLang. I am currently preparing to embark on my next project, which will harness the capabilities of the powerful JavaScript framework, Angular.</p>

<div className="flex flex-col sm:flex-row justify-center items-center mt-8 mb-5">
  <p className='text-white  text-xl'>Currently learning:</p>
 <SkillBadge name={"Angular"} path={"/angular.svg"}></SkillBadge>
    
     </div>
  
 </div>
         <section className="flex flex-row flex-wrap justify-center">
         
         {skills.map((skill,idx)=>{
            return(
                <SkillBadge key={idx} name={skill.name} path={skill.path}></SkillBadge>
            )
         })}
      

         </section>


        </article>
    )
}
export default AboutContainer;