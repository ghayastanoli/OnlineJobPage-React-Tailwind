import React from 'react'

const ViewAllJobs = () => {
  return (
    <div className='flex justify-center bg-[#e7eeea] pb-8'>
        <a href="/jobs" className='p-4 bg-black hover:bg-[#536e5f] text-white rounded-xl px-16 text-xl transition duration-500'><button type='button'>View All Jobs</button></a>
    </div>
  )
}

export default ViewAllJobs