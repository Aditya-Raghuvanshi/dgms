import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import TranspoterMenu from './TranspoterMenu';

const SeeAllDrivers = () => {
  const transpoter = useSelector(store=>store.data);
  const [seeTranspoterMenu,setSeeTranspoterMenu]=useState(false);
  let data=[];
  
  transpoter.transpoters.map((element)=>{
    if(data.indexOf(element)===-1)
    {
      data.push(element);
    }
    return null;
  })
  const handleClick=()=>{
    setSeeTranspoterMenu(!seeTranspoterMenu);
  }
  
  return (
    <div>
      <div>
        <button className='h-10 w-20'>
        <div className='flex' onClick={()=>handleClick()}>
          <img src="https://static.vecteezy.com/system/resources/previews/009/189/926/original/eps10-orange-hamburger-menu-bar-line-art-icon-or-logo-in-thick-rounded-circle-isolated-on-white-background-free-vector.jpg" alt="hammburger" /> 
        <p className='font-bold'> ADD NEW TRANSPOTER</p>
        </div>
        </button>
      </div>
      <div className='flex'>
        <div>
            {seeTranspoterMenu && <TranspoterMenu setSeeTranspoterMenu={setSeeTranspoterMenu}/>}
        </div>
        <div className='flex flex-wrap m-4'>
            {data.map((element,id)=>{
                return <Card key={id} element={element}/>
            })}
            {/* {console.log(transpoter.transpoters,transpoter.allDetails)} */}
        </div>
      </div>
    </div>
  )
}

export default SeeAllDrivers
