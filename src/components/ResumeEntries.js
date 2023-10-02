

function ResumeEntries(props) {

    const data=props.data

    return ( 
        <div key={props.idx} className='flex flex-col sm:flex-row mt-5'>
        <p className='mr-2 text-sm mt-[4px] w-full sm:w-1/5 text-white'>{data.date}</p>
        <div  className=' w-full sm:w-4/5'>
             <h2 className='font-bold text-md lg:text-xl text-white'>{data.subtitle}</h2>
           <h2 className='text-cyan-400 font-bold text-lg lg:text-xl'>{data.title}</h2>
           <ul className="list-disc">
           {data.textArray.map((text,idx)=>{
                return  <li key={`entries${idx}`} className='text-sm lg:text-md text-white'>{text}</li>
            })}
            </ul>
        </div>

    </div>
     );
}

export default ResumeEntries;