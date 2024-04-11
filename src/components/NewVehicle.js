import React from 'react'

const NewVehicle = () => {
    const handleClick=()=>{
      alert("Please Enter Driver details in either In Add new Request Option, Without Refresh");
    }
    return (
        <div className='absolute bg-orange-500  w-3/12 mx-auto my-10 p-12 right-0 left-0 bg-opacity-85'>
          <p className='text-lg py-2 font-bold text-black-500'>ADD NEW VEHICLE</p>
          <input type="text" placeholder='Vehicle Number' className='p-2 my-4 w-full bg-gray-600 text-white'/>
          <button onClick={()=>handleClick()} className='bg-rose-600 p-3 my-4 w-full hover:bg-red-800 rounded-md'>ADD</button>
        </div>
      )
}

export default NewVehicle
