import React from 'react'
import logo from '../assets/job.png'

const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-between text-2xl font-medium bg-blue-500 text-white py-6 px-20 items-center'>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="" className='h-16 bg-white rounded-[49%]' />
               <h2 className='font-bold text-3xl'>Jobs</h2> 
            </div>
            <div>
                <ul className='flex gap-6'>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Add Jobs</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar