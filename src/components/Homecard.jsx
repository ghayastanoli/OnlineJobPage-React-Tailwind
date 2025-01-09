import React from 'react'

const Homecard = () => {
  return (
    <>
    <section className='px-6'>
        <div className='container-xl lg-container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-12 px-14 rounded-lg'>
                <div className='bg-slate-300 text-black p-6 rounded-xl shadow-lg'>
                    <h2 className='text-3xl pb-3 font-semibold'>For Developers</h2>
                    <h4 className='text-xl pb-5 font-medium'>Browse our Developers Jobs and start your career today</h4>
                    <button type='button' className='bg-black text-xl p-2 px-3 rounded text-white'>Browse Jobs</button>
                </div>
                <div className='bg-blue-100 text-black p-6 rounded-xl shadow-lg'>
                    <h2 className='text-3xl pb-3 font-semibold'>For Employers</h2>
                    <h4 className='text-xl pb-5 font-medium'>List your jobs to find the perfect developer for the role</h4>
                    <button type='button' className='bg-blue-600 text-xl p-2 px-3 rounded text-white'>Add Jobs</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Homecard