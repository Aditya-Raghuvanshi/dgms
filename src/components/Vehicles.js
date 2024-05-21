import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardVehicle from './CardVehicle';
import VehicleMenu from './VehicleMenu';

const Vehicles = () => {
    const allDetail = useSelector(store => store.data.allDetails);
    //const [vehicles,setVehicles] = useState([]);
    const [seeVehicleMenu,setSeeVehicleMenu] = useState(false);
    let data= [];
    
    const params = useParams();
    // console.log(params.id);
    //console.log(allDetail[0].nameT);

    allDetail.map((element)=>{
        if(element.nameT===params.id && data.indexOf(element.nameV)===-1){
            data.push(element.nameV);
            //console.log(element.nameV);
        }
        // if(element.nameT === params.id){
        //     setVehicles([...vehicles,element.nameV]);
        // }
        return null;
    })

    const handleNewClick =()=>{
      setSeeVehicleMenu(!seeVehicleMenu);
    }
    
    //setVehicles([...vehicles,data]);
  return (
    <div >
    <button className='h-10 w-20'>
      <div className='flex' onClick={()=>handleNewClick()}>
        <img src="https://static.vecteezy.com/system/resources/previews/009/189/926/original/eps10-orange-hamburger-menu-bar-line-art-icon-or-logo-in-thick-rounded-circle-isolated-on-white-background-free-vector.jpg" alt="hammburger" /> 
      <p className='font-bold'> ADD NEW VEHICLE</p>
      </div>
    </button>
    <div className='flex'>
      <div>
        { seeVehicleMenu && <div>
          <VehicleMenu nameT={params.id} setSeeVehicleMenu={setSeeVehicleMenu}/>
      </div>}
      </div>
        <div className='flex flex-wrap'>
          {
            data.map((element,id)=>{
                return <CardVehicle key={id} element={element} nameT={params.id}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Vehicles
