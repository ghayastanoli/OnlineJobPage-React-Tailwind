import React, { useState } from 'react'
import Icon from '../assets/icons8-location-48.png'


const Joblisting = ({job}) => {
    const[showFullDescription, setShowFullDescription] = useState(false)
    let description = job.description;
    
    if(!showFullDescription){
        description = description.substring(0 , 90) + '...'; 
    }

  return (
    <div>
        <div className='bg-white p-5 rounded-xl shadow-xl'>
            <p className='text-md pb-4 text-gray-600'>{job.type}</p>
                <div className='min-h-[90px]'>
                <h3 className='text-xl pb-8 font-semibold text-wrap'>{job.title}</h3>
                </div>
            <p className='text-md pb-4 min-h-[88px]  '>{description}</p>
            <button className='text-md text-[#3b5446] pb-4 ' onClick={() => setShowFullDescription ((prevstate) => !prevstate)}>{showFullDescription ? 'Less' : 'More'}</button>
            <h3 className='text-md pb-4 border-b border-gray-300 text-[#3b5446]'>{job.salary} / Year</h3>
            <div className='flex justify-between items-center pt-4'>
            <div className='flex text-md gap-2'>
                <img src={Icon} alt="" className='h-[24px]'/>
                <p className='text-orange-600'>{job.location}</p>
            </div>
            <div>
                <a href={`/job/${job.id}`}><button type='button' className='p-2 rounded text-white text-md bg-[#213038] hover:bg-[#3b5446]'>Read More</button></a>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Joblisting