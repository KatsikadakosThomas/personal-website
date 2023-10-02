"use client"
import { useState, useEffect } from "react"
import Image from "next/image";
import Socials from "./Socials";
import { Inter } from 'next/font/google'
import EmailIcon from "./EmailIcon";
import PhoneIcon from "./PhoneIcon";
import FancyButton from "./FancyButton";

const inter = Inter({ subsets: ['latin'] })

function ContactContainer() {
    const [state, setState] = useState(false);


    useEffect(() => {

        
        setState(true)
    }, [])

    return (
        <article className={`glass max-w-[90%] md:max-w-[70%] lg:max-w-[60%] p-5 mt-[70px] max-h-[70vh] sm:h-full overflow-auto rounded shadow-xl z-30 flex flex-col md:flex-row  items-center  ${state ? "show" : "noshow"} rounded-2xl ${inter.className} `}>

            <div className="min-w-[230px] w-1/3 h-full m-5">
            <h1 className='text-3xl font-bold mb-2 text-white  '><span className='text-cyan-400 '> Contact </span>me</h1>
                <PhoneIcon><a className="text-xl text-white mb-2 hover:text-cyan-400 underline" href="tel:+30 6987886384">+30 6987886384</a>
</PhoneIcon>

<EmailIcon><p className="text-xl text-white mb-5">tkatsika@gmail.com</p></EmailIcon>

<a href="mailto:tkatsika@gmail.com">
<FancyButton></FancyButton>
</a>
                <Socials></Socials>
            </div>

            <div className='p-5 w-full sm:w-2/3'>
     

                <p className='text-slate-200 font-medium' >Are you looking to collaborate with a skilled software developer? I&apos;m eager to explore new opportunities and contribute my expertise to your team.</p>
                <br/>
                <p className='text-slate-200 font-medium' >Whether you&apos;re seeking a dedicated developer for your organization or have exciting projects in need of talent, I&apos;d love to hear from you.</p>
                <br/>
                <p className='text-slate-200 font-medium' > Please feel
                    free to reach out via email or connect with me on professional networks. Let&apos;s discuss how I can contribute to your team and help you achieve your software development goals.</p>
            </div>


        </article>
    )
}
export default ContactContainer;