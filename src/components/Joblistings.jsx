import React from 'react'
import Icon from '../assets/icons8-location-48.png'
import jobs from '../jobs.json'
import Joblisting from './Joblisting' 

const Joblistings = () => {
  return (
    <>
    <section>
        <div className='bg-blue-100'>
            <div className='flex justify-center text-4xl text-blue-600 font-semibold pt-12 pb-4'>
                <h3>Recent Jobs</h3>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 p-20 pt-8 gap-8'>
                    {jobs.map((job) => (
                        <Joblisting key={job.id} job={job}></Joblisting>
                    ))}
                    
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Joblistings