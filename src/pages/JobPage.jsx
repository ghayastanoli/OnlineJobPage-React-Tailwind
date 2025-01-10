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
        <div className="max-w-4xl mx-auto p-2">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-lg mb-2">{job.type}</p>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <p className="text-xl font-semibold mb-4">{job.salary}</p>
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Description</h2>
                    <p>{job.description}</p>
                </div>
            </div>
        </div>
    )
}

export default JobPage