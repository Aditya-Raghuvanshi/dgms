import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

const SeeAllDrivers = () => {
  const transpoter = useSelector(store=>store.data);
  
  
  return (
    <div className='flex flex-wrap m-4'>
        {transpoter.transpoters.map((element,id)=>{
            return <Card key={id} element={element}/>
        })}
        {/* {console.log(transpoter.transpoters,transpoter.allDetails)} */}
    </div>
  )
}

export default SeeAllDrivers
