import React from 'react'

const CardDriverDetails = ({currentOfficer ,
    fromDate, nameD, nameT, nameV,
    plantCode, plantName, toDate}) => {
    
  return (
    <div className='h-max-fit w-fit bg-orange-400 text-black mt-2 ml-2 shadow-md cursor-pointer text-center items-center p-8 font-bold'>
       <button >
        <p>Permision Given By Officer :- {currentOfficer}</p>
        <p>Name of Transpoter :- {nameT}</p>
        <p>Vehicle Number :- {nameV}</p>
        <p>Name Of Driver :- {nameD}</p>
        <p>Plant Code :- {plantCode}</p>
        <p>Plant Name :- {plantName}</p>
        <p>From Date :- {fromDate} </p>
        <p>To Date :- {toDate}</p>
      </button>
    </div>
  )
}

export default CardDriverDetails
