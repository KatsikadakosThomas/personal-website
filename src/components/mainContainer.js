"use client"
import { useEffect,useState } from 'react'
import Socials from '@/components/socials'
import Typewriter from "@/components/typewriter"
import Image from 'next/image'
import Burger from './burger'

export default function MainContainer(){
    const [state, setState] = useState(false);


    useEffect(()=>{
    setState(true)
    },[])

    return(
        <article className={`glass max-w-[90%] md:max-w-[60%] lg:max-w-[40%] mt-20  rounded shadow-xl z-30 flex flex-col justify-center items-center  ${state ? "show" : "noshow"} rounded-2xl  `}>

        <figure id="image-wrapper" className='rounded-full relative w-[120px] lg:w-[150px] h-[120px] lg:h-[150px] overflow-hidden mt-4'>
        <Image src="/Katsikadakos_thomas.jpeg" fill={true}></Image>
        </figure>

    <div className='p-5'>
    <h1 className='text-xl md:text-3xl font-bold text-center mb-2 '>Hi, my name is<span className='text-cyan-400'> Katsikadakos Thomas</span></h1>
   
<p className='text-slate-200 font-medium text-center' >I am a motivated software developer with 2 years of full stack
experience in making web applications mainly with Next.js. Committed to delivering high-quality, scalable
solutions that meet client requirements.</p>
    </div>
    <Typewriter></Typewriter>
    <Socials color={"white"} hover={"opacity-70"}></Socials>

     
      </article>
    )
}