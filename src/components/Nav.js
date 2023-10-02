
import Link from "next/link"
import Burger from  "../components/Burger"

export default function Nav( {openModal,opened}){

    return(
        <nav className="absolute glow left-0 top-0 z-[200] h-[60px] sm:h-20 w-full glass shadow font-bold flex flex-row justify-end sm:justify-center items-center">
            <div className="m-2 hidden sm:block">
                <span className="text-cyan-500">01. </span>
                <Link className="text-white" href="/">HOME</Link>
                </div>
            <div className="m-2  hidden sm:block">
                <span className="text-cyan-500">02. </span>
                <Link className="text-white" href="/resume">RESUME</Link>
                </div>
            <div className="m-2  hidden sm:block">
                <span className="text-cyan-500">03. </span>
                <Link className="text-white" href="/about">ABOUT</Link>
                </div>
                <div className="m-2  hidden sm:block">
                <span className="text-cyan-500">04. </span>
                <Link className="text-white" href="/contact">CONTACT</Link>
                </div>
                <Link href="/Thomas_Katsikadakos_resume.pdf" download target="_blank" className="py-1 px-2 mx-5 border-2 border-cyan-400 text-cyan-400 font-bold inline-block  hover:bg-cyan-400 hover:text-white">Resume</Link>

                <div className="block sm:hidden mr-10" >
                <Burger openModal={openModal} opened={opened}></Burger>
                </div>
         
        </nav>
    )
}