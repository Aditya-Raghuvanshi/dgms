import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirebase } from '../context/Firebase';
import { useNavigate } from 'react-router-dom';

const DriverMenu = ({nameT,nameV}) => {
    const firebase = useFirebase();

    const [nameD,setNameD] = useState("");
    const [plantCode,setPlantCode] = useState("");
    const [plantName,setPlantName] = useState("");
    const [fromDate,setFromDate] = useState("");
    const [toDate,setToDate] = useState("");
    const navigate = useNavigate();

    const currentOfficer = useSelector(store=>store.admin.currentUser);

    const handleClick=async()=>{
        alert("Succesfully Added, Please Wait for few seconds !!");
        //console.log(nameT,nameV,nameD,plantCode,plantName,fromDate,toDate,currentOfficer);
        await firebase.handleCreateNewReq(nameT,nameV,nameD,plantCode,plantName,fromDate,toDate,currentOfficer);
        navigate("/body");
    }
  return (
    <div>
      <form onSubmit={(e)=> e.preventDefault()} className='absolute bg-orange-500  w-3/12 mx-auto p-12 right-0 left-0 bg-opacity-85'>
            <h1 className='text-white text-3xl my-2 font-bold '>ADD NEW DRIVER</h1>
            <input onChange={(e)=>setNameD(e.target.value)}  type="text" placeholder='Driver Name' className='p-2 my-4 w-full bg-gray-600 text-white'/>
            <input onChange={(e)=>setPlantCode(e.target.value)}  type="number" placeholder='Plant Code' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            <input onChange={(e)=>setPlantName(e.target.value)} type="text" placeholder='TP Plant Name' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            FROM
            <input onChange={(e)=>setFromDate(e.target.value)} type="date" placeholder='from' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            TO
            <input onChange={(e)=>setToDate(e.target.value)} type="date" placeholder='to' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            <button onClick={()=>handleClick()} className='bg-rose-600 p-3 my-4 w-full hover:bg-red-800 rounded-md'>ADD</button>
        </form>
    </div>
  )
}

export default DriverMenu
