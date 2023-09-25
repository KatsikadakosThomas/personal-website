import Link from "next/link"

export default function Nav(){

    return(
        <nav className="absolute left-0 top-0 z-[200] h-20 w-full glass shadow font-bold flex flex-row justify-center items-center">
            <div className="m-2">
                <span className="text-cyan-500">01. </span>
                <Link href="\">HOME</Link>
                </div>
            <div className="m-2">
                <span className="text-cyan-500">02. </span>
                <Link href="\resume">RESUME</Link>
                </div>
            <div className="m-2">
                <span className="text-cyan-500">03. </span>
                <Link href="\">ABOUT</Link>
                </div>

        </nav>
    )
}