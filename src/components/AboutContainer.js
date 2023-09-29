"use client"
import { useState, useEffect } from "react"
import Image from "next/image";

import { Inter } from 'next/font/google'
import FancyButton from "./FancyButton";

const inter = Inter({ subsets: ['latin'] })

function AboutContainer() {
    const [state, setState] = useState(false);


    useEffect(() => {

        
        setState(true)
    }, [])

    return (
        <article className={`glass max-w-[90%] md:max-w-[70%] lg:max-w-[60%] p-5 mt-[70px] h-[80vh] sm:h-full overflow-auto rounded shadow-xl z-30 flex flex-col  items-center  ${state ? "show" : "noshow"} rounded-2xl ${inter.className} `}>
  <h1 className='text-3xl font-bold mb-2 text-white  '><span className='text-cyan-400 '> About </span>me</h1>
<section>
<div className="min-w-[230px] w-1/3 h-full m-5">
          

            </div>

            <div className='p-5 w-full sm:w-2/3'>
     

                <p className='text-slate-200 font-medium' >I was born and raised in greece and worked as a freelance photographer-videographer for 11 years. There was always α passion for computer science and after Covid I found a reason and a opportunity to change my career and follow my passion.</p>
                <br/>
                <p className='text-slate-200 font-medium' > In the long years of freelance I have been in the shoes of a business owner and learned to speak with clients and be responsible and meet deadlines.</p>
                <br/>
                <p className='text-slate-200 font-medium' > Now my singular goal is to progress my skills as a programmer and web developer, always wanting to try and learn new things in my field and technology in general.</p>
            </div>
</section>
<h1 className='text-3xl font-bold mb-2 text-white  '><span className='text-cyan-400 '> Skill</span>s</h1>
         <section>


         </section>


        </article>
    )
}
export default AboutContainer;