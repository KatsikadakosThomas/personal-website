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
<article className={`glass max-w-[90%] md:max-w-[70%] lg:max-w-[60%] p-5 my-[auto] h-[70vh] overflow-auto rounded shadow-xl z-30 flex flex-col  items-center  ${state ? "show" : "noshow"} rounded-2xl ${inter.className} `}>
<h1 className='text-3xl font-bold mb-2 text-white  '><span className='text-cyan-400 '> About </span>me</h1>
<section>
            <div className='p-5 w-full'>
     
                <p className='text-slate-200 font-medium' >I was born and raised in greece and worked as a freelance photographer-videographer for 11 years. There was always a passion for computer science and after Covid I found a reason and a opportunity to change my career and follow my passion.</p>
                <br/>
                <p className='text-slate-200 font-medium' > In the long years of freelance I have been in the shoes of a business owner and learned to speak with clients and be responsible and meet deadlines.</p>
                <br/>
                <p className='text-slate-200 font-medium' > Now my singular goal is to progress my skills as a programmer and web developer, always wanting to try and learn new things in my field and technology in general.</p>
           
            </div>
</section>

<h1 className='text-3xl font-bold mb-2 text-white  '><span className='text-cyan-400 '> Skill</span>s</h1>
<div className='p-5 w-full'>
     
     <p className='text-slate-200 font-medium' >The last two years I have worked mainly with the MERN stack and created and maintained a numbers of websites and platforms. I was also able to deploy many websites in a linux server enviroment with docker and nginx</p>
     <br/>
     <p className='text-slate-200 font-medium' >Now I want to expand my knowledge and experiment and build project with many technologies such as Vue,Angular,goland and many others. Right now my next build wll be with the powerfull js framework Angular.</p>

<div className="flex flex-row justify-center items-center mt-8 mb-5">
  <p className='text-slate-200 font-medium'>Right now I am learning:</p>
<div className="w-[150px]"> <SkillBadge name={"Angular"} path={"/angular.svg"}></SkillBadge></div>
    
     </div>
  
 </div>
         <section className="flex flex-row flex-wrap justify-center">
         
         {skills.map((skill)=>{
            return(
                <SkillBadge name={skill.name} path={skill.path}></SkillBadge>
            )
         })}
      

         </section>


        </article>
    )
}
export default AboutContainer;