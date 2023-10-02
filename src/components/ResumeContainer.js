"use client"
import { useEffect, useState, Fragment } from 'react'
import resumeData from '../../data/resumeData';
import ResumeEntries from './ResumeEntries';


export default function ResumeContainer() {
    const [state, setState] = useState(false);


    useEffect(() => {
        setState(true)
    }, [])

    return (

        <article className={`glass max-w-[90%] md:max-w-[70%] lg:max-w-[100%] max-h-[70vh] lg:max-h-[85vh] mt-[30px]  overflow-auto rounded shadow-xl z-30 flex flex-col  items-center  ${state ? "show" : "noshow"}  sm:m-10 `}>

            <h1 className='text-2xl lg:text-3xl font-extrabold mt-5 text-white'>RESUME</h1>
            <section className='flex flex-col lg:flex-row justify-center items-start'>
             
                <div className=' m-10 lg:w-1/2'>
           
                    <h1 className=' text-xl lg:text-2xl font-bold mb-4 text-white'>Education</h1>

                       {resumeData.education.map((entry,idx)=>{
                        return   <ResumeEntries key={idx} data={entry} />
                       })}
                      

               
                </div>

                <div className=' m-10 lg:w-1/2'>

                <h1 className=' text-xl lg:text-2xl font-bold mb-4 text-white'>Work Experience</h1>

                {resumeData.workExp.map((workEntry,idx)=>{
                        return   <ResumeEntries key={idx} data={workEntry} />
                       })}

              

                  
                  
                </div>

            </section>

        </article>
    )
}