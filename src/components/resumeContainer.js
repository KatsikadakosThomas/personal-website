"use client"
import { useEffect, useState, Fragment } from 'react'


export default function ResumeContainer() {
    const [state, setState] = useState(false);


    useEffect(() => {
        setState(true)
    }, [])

    return (

        <article className={`glass mt-20  rounded shadow-xl z-30 flex flex-col justify-center items-center  ${state ? "show" : "noshow"}  sm:m-10`}>

            <h1 className='text-2xl lg:text-4xl font-extrabold mt-5'>RESUME</h1>
            <section className='flex flex-col lg:flex-row justify-center items-start'>
             
                <div className='m-2 sm:m-10 lg:w-1/2'>
           
                    <h1 className=' text-2xl lg:text-3xl font-bold mb-4'>Education</h1>

                    <div className='flex flex-row mt-5'>
                        <p className='mr-2 text-sm mt-[4px] w-1/5'>10/2020 - 04/2021</p>

                        <div className='w-4/5'>
                            <h2 className='font-bold text-md lg:text-xl'>Foundation and Advanced certifications, Software Development</h2>
                            <h2 className='text-cyan-400 font-bold text-xl lg:text-2xl'>PeopleCert Coding Bootcamp</h2>
                            <p className='text-sm lg:text-md'>JavaScript Stream</p>
                            <p className='text-sm lg:text-md'>
                            500 hours of intensive training in Software Development
                            </p>
                            <p className='text-sm lg:text-md'>Object Oriented Programming, Functional Programming, Debugging Techniques, Test Driven Development, Common Architecture Patterns, </p>
                            <p className='text-sm lg:text-md'>Data/Class Modelling, REST architecture, Web servers (Apache, nginx), Unix command-line, Cloud-based services and their development, UI / UX Design, Database design, MongoDB and other NoSQL.</p>
                        </div>

                    </div>

                    <div className='flex flex-row mt-5'>
                        <p className='mr-2 text-sm mt-[4px] w-1/5'>09/2008 - 09/2019</p>
                        <div  className='w-4/5'>
                        <h2 className='font-bold text-md lg:text-xl'>Bachelor's degree</h2>
                           <h2 className='text-cyan-400 font-bold text-xl lg:text-2xl'>University of West Attica</h2>
                            <p className='text-sm lg:text-md'>Photography and Audiovisual Arts</p>
                        </div>

                    </div>
                </div>

                <div className=' m-10 lg:w-1/2'>
                <h1 className=' text-2xl lg:text-3xl font-bold mb-4'>Work Experience</h1>
                    <div className='flex flex-row mt-5'>
                        <p className='mr-2 text-sm mt-[4px] w-1/5'>09/2021 - Present</p>
                        <div  className='w-4/5'>
                             <h2 className='font-bold text-md lg:text-xl'>Technature IKE</h2>
                           <h2 className='text-cyan-400 font-bold text-xl lg:text-2xl'>Software Developer</h2>
                          <p className='text-sm lg:text-md'>I am producing testable and maintanble code for the frontend and backend</p>
                          <p className='text-sm lg:text-md'>I work, create and supervise the companys platforms and websites with Node.js ,
                                Next.js and Mongo</p>
                          <p className='text-sm lg:text-md'>I am responsible for the delivering of the applications to production with Docker in
                                linux servers</p>
                          <p className='text-sm lg:text-md'>
                                I contact and communicate with clients and lead projects
                            </p>
                        </div>

                    </div>
                    <div className='flex flex-row mt-5'>
                        <p className='mr-2 text-sm mt-[4px] w-1/5'>11/2019 - 11/2021</p>
                        <div  className='w-4/5'>
                             <h2 className='font-bold text-md lg:text-xl'>Byzantine & christian museum of Athens</h2>
                           <h2 className='text-cyan-400 font-bold text-xl lg:text-2xl'>Photographer - videographer</h2>
                            <p className='text-sm lg:text-md'>I made 5 advertisments that were broadcasted in national television</p>
                            <p className='text-sm lg:text-md'>Catalog and photoshoot of delicate artifacts</p>
                        </div>

                    </div>


                    <div className='flex flex-row mt-5'>
                        <p className='mr-2 text-sm mt-[4px] w-1/5'>09/2011 - 11/2019</p>
                        <div  className='w-4/5'>
                             <h2 className='font-bold text-md lg:text-xl'>Freelance</h2>
                           <h2 className='text-cyan-400 font-bold text-xl lg:text-2xl'>Photographer - videographer</h2>
                            <p className='text-sm lg:text-md'>I had an 8 year career and built a professional attitude</p>
                        </div>

                    </div>
                  
                  
                </div>

            </section>

        </article>
    )
}