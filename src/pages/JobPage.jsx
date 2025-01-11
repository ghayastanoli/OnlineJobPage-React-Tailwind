import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);

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
        <div className=" mx-5 max-2-3xl p-2 text-white flex gap-3">
            <div className="bg-gradient-to-t from-[#536e5f] to-[#b9ccc1]  rounded-lg shadow-xl p-6">
            <h1 className="text-3xl font-bold mb-4 text-[white]">{job.title}</h1>
                <p className="text-lg mb-2">{job.type}</p>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <p className="text-xl font-semibold mb-4">{job.salary}</p>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p>{job.description}</p>
                </div>
            </div>
            <div className='bg-gradient-to-t from-[#536e5f] to-[#b9ccc1]  rounded-lg shadow-xl p-6'>
                <h3>About the Company</h3>
                <h4>{job.company.name}</h4>
            </div>
        </div>
        </>
    )
}

export default JobPage