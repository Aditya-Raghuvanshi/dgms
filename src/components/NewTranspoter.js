import React from 'react'

const NewTranspoter = () => {
    const handleClick=()=>{
        alert("Please Enter Vehicle Number Without Refresh");
    }
  return (
    <div className='absolute bg-orange-500  w-3/12 mx-auto my-10 p-12 right-0 left-0 bg-opacity-85'>
      <p className='text-lg py-2 font-bold text-black-500'>ADD NEW TRANSPOTER</p>
      <input type="text" placeholder='Transpoter Name' className='p-2 my-4 w-full bg-gray-600 text-white'/>
      <button onClick={()=>handleClick()} className='bg-rose-600 p-3 my-4 w-full hover:bg-red-800 rounded-md'>ADD</button>
    </div>
  )
}

export default NewTranspoter
