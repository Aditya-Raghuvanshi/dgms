import React from 'react'
import { useNavigate } from 'react-router-dom';


const CardVehicle = (props) => {
    const navigate = useNavigate();
    
    //console.log(props);
    const handleClick=()=>{
        navigate("/body/seeAllDrivers/vehicles/"+props.nameT+"/"+props.element+"+"+props.nameT);
    }
    
  return (
    <div>
    <div className='flex'>
        <button onClick={()=>handleClick()}>
        <div className='h-40 w-40 bg-orange-400 text-black m-4 shadow-md cursor-pointer text-center items-center pt-[15%] font-bold'>
          {props.element}
        </div>
        </button>
    </div>
    </div>
  )
}

export default CardVehicle
