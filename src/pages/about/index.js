
import Canvas from "@/components/Canvas";
import AboutContainer from "@/components/AboutContainer";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Contact() {

   
    

    return ( 
        <>
         <main
      className={`flex min-h-screen flex-col items-center  ${inter.className} scrollLock pt-[60px]`}
    >


        <Canvas  ></Canvas>
        <AboutContainer ></AboutContainer>
    </main>
        </>
     );
}

export default Contact;