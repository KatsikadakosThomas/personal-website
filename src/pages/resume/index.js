import ResumeContainer from "@/components/ResumeContainer";
import { Effect } from "../../../particleEffect";
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Canvas from "@/components/Canvas";

const inter = Inter({ subsets: ['latin'] })

function Resume() {
   

  
  return (
    <main
    id="main"
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}  `}
    >
<Canvas></Canvas>
      <ResumeContainer></ResumeContainer>
    </main>
  )
    
}

export default Resume;