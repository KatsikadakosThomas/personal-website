"use client"
import { useEffect,useState } from 'react'
import Socials from '@/components/socials'
import Typewriter from "@/components/typewriter"
import Image from 'next/image'

export default function MainContainer(){
    const [state, setState] = useState(false);


    useEffect(()=>{
setState(true)
    },[])

    return(
        <article className={`glass w-[700px]  rounded shadow-xl z-30 flex flex-col justify-center items-center  ${state ? "show" : "hidden"} `}>

        <figure id="image-wrapper" className='rounded-full relative w-[150px] h-[150px] overflow-hidden m-4'>
        <Image src="/Katsikadakos_thomas.jpeg" fill={true}></Image>
        </figure>

    <div className='p-5'>
    <h1 className='text-3xl font-bold text-center mb-2 '>Hi, my name is<span className='text-cyan-400'> Katsikadakos Thomas</span></h1>
   
<p className='text-slate-200 font-medium text-center' >I am a motivated software developer with 2 years of full stack
experience in making web applications mainly with Next.js. Committed to delivering high-quality, scalable
solutions that meet client requirements.</p>
    </div>
    <Typewriter></Typewriter>

    <Socials color={"white"} hover={"opacity-70"}></Socials>

     
      </article>
    )
}