import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from '../context/Firebase';
import { pushAllDetails, pushTranspoter } from '../utils/dataSlice';

const Home = () => {
    const user = useSelector(store=>store.admin.currentUser);
    const [transpoterN,setTranspoterN] = useState([]);
    const [dgmsData,setDgmsData] = useState([]);
    const dispatch = useDispatch();
    const firebase = useFirebase();
    let alreadyPresent=[];

  useEffect(()=>{
    getData();
    //eslint-disable-next-line
  },[]);
  async function getData(){
    await firebase.listAllDriver().then(docs=>docs.forEach(element => {
      const temp=element.data();
      //console.log(temp);
      //console.log(temp.nameT,temp.nameV);
      if(alreadyPresent.indexOf(temp.nameT)===-1){
        alreadyPresent.push(temp.nameT);
        setTranspoterN((transpoterN)=>[...transpoterN,temp.nameT]);
      }
      setDgmsData((dgmsData)=>[...dgmsData,temp]);
    }));
  };
  
  //console.log(transpoterN);
  //console.log(dgmsData);
  dispatch(pushTranspoter(transpoterN));
  dispatch(pushAllDetails(dgmsData));
  return (
    <div>
        <div className='w-[100%] flex items-center justify-center '>
      <p className='text-4xl my-6 text-center mx-auto font-serif ml-64'>Welcome {user} !!</p>
      </div>
      <h1 className='text-2xl text-red-600 font-serif ml-4 py-4'>Here are some Instruction you can follow to use the Website Properly :-</h1>
      <div className="">
        <ul>
          <li className='text-xl text-red-600 font-serif ml-4 my-2'>
            1. If you want to see all the request Given by you to the Drivers then the List is Present in the Approved by you Section.
          </li>
          <li className='text-xl text-red-600 font-serif ml-4 my-2'>
            2. You can see All the List of Transpoters and corresponding data of vehicles and Drivers in See All Drivers Section.
          </li>
          {/* <li className='text-xl text-red-600 font-serif ml-4 my-2'>
            3. If you Want to Add New Transpoter or New Vehicle to the Database please Move in the Order :-<br/>
            a. Add new Transpoter,<br/>
            b. Add new Vehicle,<br/>
            c. Add new Request<br/>
          </li> */}
          <li className='text-xl text-red-600 font-serif ml-4 my-2'>
            4. If you want to Add new Driver to the Already Present Vehicle then GO to See All Drivers Section.
          </li>
          <li className='text-xl text-red-600 font-serif ml-4 my-2'>
            5. You Can do Police Verification from Police Verification Section.
          </li>
          <li className='text-xl text-red-600 font-serif ml-4 my-2'>
            6. You Can Logout from Logout Button.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
