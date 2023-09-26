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

        <article className={`glass mt-[100px] max-h-[80vh] overflow-auto rounded shadow-xl z-30 flex flex-col  items-center  ${state ? "show" : "noshow"}  sm:m-10`}>

            <h1 className='text-2xl lg:text-4xl font-extrabold mt-5'>RESUME</h1>
            <section className='flex flex-col lg:flex-row justify-center items-start'>
             
                <div className=' m-10 lg:w-1/2'>
           
                    <h1 className=' text-2xl lg:text-3xl font-bold mb-4'>Education</h1>

                       {resumeData.education.map((entry,idx)=>{
                        return   <ResumeEntries key={idx} data={entry} />
                       })}
                      

               
                </div>

                <div className=' m-10 lg:w-1/2'>

                <h1 className=' text-2xl lg:text-3xl font-bold mb-4'>Work Experience</h1>

                {resumeData.workExp.map((workEntry,idx)=>{
                        return   <ResumeEntries key={idx} data={workEntry} />
                       })}

              

                  
                  
                </div>

            </section>

        </article>
    )
}