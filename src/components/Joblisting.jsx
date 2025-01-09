import React from 'react'
import Icon from '../assets/icons8-location-48.png'


const Joblisting = ({job}) => {
  return (
    <div>
        <div className='bg-white p-6 rounded-xl shadow-xl'>
            <p className='text-xl pb-4 text-gray-600'>{job.type}</p>
                <div className='min-h-[96px]'>
                <h3 className='text-2xl pb-8 font-semibold text-wrap'>{job.title}</h3>
                </div>
            <p className='text-xl pb-4 min-h-[250px] '>{job.description}</p>
            <a href="" className='text-xl text-blue-800'>More</a>
            <h3 className='text-xl pb-4 border-b border-gray-300 text-blue-800'>{job.salary} / Year</h3>
            <div className='flex justify-between items-center pt-4'>
            <div className='flex text-xl gap-3'>
                <img src={Icon} alt="" className='h-[24px]'/>
                <p className='text-orange-600'>{job.location}</p>
            </div>
            <div>
                <a href="`/jobs/${job.id}`"><button type='button' className='p-3 rounded text-white text-xl bg-blue-600'>Read More</button></a>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Joblisting