import React from 'react'
import { useSelector } from 'react-redux'
import CardDriverDetails from './CardDriverDetails';

const ApprovedByYou = () => {
  const allDetail = useSelector(store=>store.data.allDetails);
  const user = useSelector(store=>store.admin.currentUser);
  let data = [];
  let driverName=[];
  const userTemp = user.split(" ");

  allDetail.map((element)=>{
    const temp= element.currentOfficer.split(" ");

    if(temp[0] === userTemp[0] && temp[1]===userTemp[1] && driverName.indexOf(element.nameD)===-1)
    {
      driverName.push(element.nameD);
      data.push(element);
    }
    return null;
  })
  // console.log(allDetail);
  // console.log(driverName);
  return (
    <div className='flex flex-wrap'>
      {
        data.map((element,id)=>{
           return <CardDriverDetails key={id} currentOfficer={element.currentOfficer} 
          fromDate={element.fromDate} nameD={element.nameD} nameT={element.nameT} nameV={element.nameV}
          plantCode={element.plantCode} plantName={element.plantName} toDate={element.toDate}/>
        })
      }
    </div>
  )
}

export default ApprovedByYou
