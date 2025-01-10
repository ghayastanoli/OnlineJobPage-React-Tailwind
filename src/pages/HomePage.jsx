import React from 'react'
import Hero from '../components/hero';
import Job from '../components/Joblistings';
import AllJobs from '../components/ViewAllJobs';
import HomeCard from '../components/Homecard'

const HomePage = () => {
  return (
    <>
    <Hero></Hero>
    <HomeCard></HomeCard>
    <Job isHome={true}></Job>
    <AllJobs ></AllJobs>
    </>
  )
}

export default HomePage