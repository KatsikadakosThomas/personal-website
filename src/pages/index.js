import { Inter } from 'next/font/google'
import MainContainer from '@/components/MainContainer'
import Canvas from '@/components/Canvas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
    <main
      className={` flex min-h-screen flex-col items-center justify-center ${inter.className} scrollLock  `}
    >
  
   <Canvas></Canvas>

<MainContainer></MainContainer>
    </main>
  )
}
