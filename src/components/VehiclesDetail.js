import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CardDriverDetails from './CardDriverDetails';
import DriverMenu from './DriverMenu';

const VehiclesDetail = () => {
  const allDetail = useSelector(store => store.data.allDetails);
  const params = useParams();
  const [seeDriverMenu,setSeeDriverMenu]= useState(false);
  //console.log(params.id);
  //const [detailDriver,setDetailDriver] = useState([]);
  const data = [];
  const driverName=[];
  const words = params.id.split("+");
  //console.log(words,allDetail);

  allDetail.map((element)=>{
    if(element.nameT===words[1] && element.nameV===words[0] && driverName.indexOf(element.nameD)===-1)
    {
      driverName.push(element.nameD);
      data.push(element);
      //console.log(element);
    }
    return null;
  });
  // console.log(data);
  // console.log(driverName);

  const handleClick=()=>{
      setSeeDriverMenu(!seeDriverMenu);
  }

  return (
    <div>
      <button className='h-10 w-20'>
      <div className='flex' onClick={()=>handleClick()}>
        <img src="https://static.vecteezy.com/system/resources/previews/009/189/926/original/eps10-orange-hamburger-menu-bar-line-art-icon-or-logo-in-thick-rounded-circle-isolated-on-white-background-free-vector.jpg" alt="hammburger" /> 
      <p className='font-bold'> ADD NEW DRIVER</p>
      </div>
      </button>

      <div className="flex">{seeDriverMenu &&
        <div className='h-full w-fit'>
          <DriverMenu nameT={words[1]} nameV={words[0]} setSeeDriverMenu={setSeeDriverMenu}/>
        </div>}
        <div className='flex'>
        {
          data.map((element,id)=>{
            return <CardDriverDetails key={id} currentOfficer={element.currentOfficer} 
            fromDate={element.fromDate} nameD={element.nameD} nameT={element.nameT} nameV={element.nameV}
            plantCode={element.plantCode} plantName={element.plantName} toDate={element.toDate}/>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default VehiclesDetail
