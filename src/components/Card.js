import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    //console.log(props.element);
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/body/seeAllDrivers/vehicles/"+props.element);
    }
  return (
    <>
    <button className='text-center' onClick={()=>handleClick()}>
    <div className='h-40 w-40 bg-orange-400 text-black m-4 shadow-md cursor-pointer text-center items-center p-12 font-bold'>
      {props.element}
    </div>
    </button>
    </>
  )
}

export default Card
