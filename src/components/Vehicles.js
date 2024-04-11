import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardVehicle from './CardVehicle';
// import { useState } from 'react';

const Vehicles = () => {
    const allDetail = useSelector(store => store.data.allDetails);
    //const [vehicles,setVehicles] = useState([]);
    let data= [];
    
    const params = useParams();
    // console.log(params.id);
    //console.log(allDetail[0].nameT);

    allDetail.map((element)=>{
        if(element.nameT===params.id){
            data.push(element.nameV);
            //console.log(element.nameV);
        }
        // if(element.nameT === params.id){
        //     setVehicles([...vehicles,element.nameV]);
        // }
        return null;
    })
    
    //setVehicles([...vehicles,data]);
  return (
    <div className='flex flex-wrap'>
      {
        data.map((element,id)=>{
            return <CardVehicle key={id} element={element} nameT={params.id}/>
        })
      }
    </div>
  )
}

export default Vehicles
