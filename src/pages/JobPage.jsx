import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Icon from '../assets/whiteloc.png'

const JobPage = ({deleteJob}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [job, setJob] = useState(null);

    const onDeleteClick = (jobId) =>{
        const confirm = window.confirm('Are you sure you want to delete the following listing?')
        if(!confirm){
            return;
        }
        deleteJob(jobId);
        navigate('/jobs');
    }

    useEffect(() => {
        const fetchjob = async () => {
            try {
                const res = await fetch(`/api/jobs`);
                const data = await res.json();
                const foundJob = data.find(job => job.id === id);
                setJob(foundJob);
            } catch (error) {
                console.log('Error Fetching Data!!', error)
            }
        }
        fetchjob();
    }, [id])

    if (!job) {
        return <div>Loading...</div>
    }

    return (
        <>
        <div className='flex justify-around mx-5 p-4'>
        <div className="  p-2 text-white flex gap-3">
            <div className="bg-[#536e5f] max-w-4xl  rounded-lg shadow-xl p-6">
            <h1 className="text-3xl font-bold mb-4 text-[white]">{job.title}</h1>
                <p className="text-lg mb-2">{job.type}</p>
                <div className='flex text-md gap-2 py-4 pb-6 items-center'>
                                <img src={Icon} alt="" className='h-[24px]'/>
                                <p className='text-white'>{job.location}</p>
                            </div>
                <p className="text-xl font-semibold mb-4">{job.salary}</p>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p>{job.description}</p>
                </div>
            </div>
            <div className='bg-[#536e5f] max-w-md  rounded-lg shadow-xl p-6'>
                <h2 className='text-xl'>About the Company</h2>
                <h2 className='text-xl font-semibold pt-4'>{job.company.name}</h2>
                <h4 className='pt-2'>{job.company.description}</h4>
                <h3 className='text-md pt-3 font-bold'>Contact Email:</h3>

                <p className='my-2 bg-indigo-100 text-[#536e5f] p-2 italic'>
                  {job.company.contactEmail}
                </p>

                <h3 className='text-md font-bold'>Contact Phone:</h3>

                <p className='my-2 bg-indigo-100 text-[#536e5f] p-2 italic'>
                  {' '}
                  {job.company.contactPhone}
                </p>
                <div className=' p-2 rounded-lg mt-2'>
            <a href=""><button className=' bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-2 px-2 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 '>Manage Jobs</button></a>
            <a href=""><button onClick={() => onDeleteClick(job.id)} className='bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 px-2 rounded-full w-full focus:outline-none focus:shadow-outline mt-3'>Delete Job</button></a>
        </div>
            </div>
        </div>
        </div>
       
        </>
    )
}

export default JobPage