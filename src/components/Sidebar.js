import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-1/5 flex flex-col mt-2 h-screen'>
       <Link className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold hover:text-lg' to={"/body"}><button className=''>Home</button></Link>
       <Link className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold hover:text-lg' to={"/body/approvedByYou"}><button className=''>Approved By You</button></Link>
       <Link className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold hover:text-lg' to={"/body/seeAllDrivers"}><button className=''>See All Drivers</button></Link>
       <Link className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold hover:text-lg' to={"/body/addNewRequest"}><button className=''>Add New Request</button></Link>
       <Link className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold hover:text-lg' to={"/body/addNewTranspoter"}><button className=''>Add New Transpoter</button></Link>
       <Link className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold hover:text-lg' to={"/body/addNewVehicle"}><button className=''>Add New Vehicle</button></Link>
       <button className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold hover:text-lg'><a target='_blank' rel="noreferrer" href="https://cctnsup.gov.in/citizenportal/CitizenVerification.aspx">Police Verification</a></button>
       <Link className='bg-orange-500 text-white py-5 cursor-pointer hover:bg-orange-300 text-center font-bold h-full hover:text-lg' to={"/"}><button className=''>Logout</button></Link>
    </div>
  )
}

export default Sidebar
