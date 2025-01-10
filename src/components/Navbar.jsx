import React from 'react'
import logo from '../assets/job.png'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10'>
        <div className='flex justify-between text-xl font-medium bg-gradient-to-t from-[#8eb19d] to-[#cfdeb5] text-white py-4 px-20 items-center'>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="" className='h-16 bg-white rounded-2xl' />
               <h2 className='font-bold text-3xl'>Jobs</h2> 
            </div>
            <div>
                <ul className='flex gap-4 '>
                    <li><a href="/"><button className='hover:bg-black hover: p-2 rounded-md transition duration-200 active:bg-black'>Home</button></a></li>
                    <li><a href="/jobs" ><button className='hover:bg-black hover: p-2 rounded-md transition duration-200 active:bg-black'>Jobs</button></a></li>
                    <li><a href="/add-jobs"><button className='hover:bg-black hover: p-2 rounded-md transition duration-200 active:bg-black'>Add Jobs</button></a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar