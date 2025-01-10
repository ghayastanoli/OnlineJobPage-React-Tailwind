import React from 'react'
import Joblisting from './Joblisting' 
import {useEffect, useState} from 'react'

const Joblistings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const fetchjobs = async () => {
            const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log('Error Fetching Data!!' , error)
            }

        }
        fetchjobs();
    },[])
    
  return (
    <>
    <section>
        <div className='bg-[#e7eeea]'>
            <div className='flex justify-center text-3xl text-[#19241e] font-semibold pt-12 pb-4'>
                <h3>{isHome ? 'Recent Jobs' : 'Browse Jobs'}</h3>
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