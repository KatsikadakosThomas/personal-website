
import Canvas from "@/components/Canvas";
import ContactContainer from "@/components/ContactContainer";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function Contact() {

   
    

    return ( 
        <>
         <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className} scrollLock `}
    >


        <Canvas  ></Canvas>
        <ContactContainer ></ContactContainer>
    </main>
        </>
     );
}

export default Contact;