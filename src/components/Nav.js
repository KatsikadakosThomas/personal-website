import Link from "next/link"
import Burger from  "../components/Burger"

export default function Nav(){

    return(
        <nav className="absolute left-0 top-0 z-[200] h-[50px] sm:h-20 w-full glass shadow font-bold flex flex-row justify-end sm:justify-center items-center">
            <div className="m-2 hidden sm:block">
                <span className="text-cyan-500">01. </span>
                <Link href="/">HOME</Link>
                </div>
            <div className="m-2  hidden sm:block">
                <span className="text-cyan-500">02. </span>
                <Link href="/resume">RESUME</Link>
                </div>
            <div className="m-2  hidden sm:block">
                <span className="text-cyan-500">03. </span>
                <Link href="/">ABOUT</Link>
                </div>

                <div className="block sm:hidden mr-10">
                <Burger></Burger>
                </div>
         
        </nav>
    )
}