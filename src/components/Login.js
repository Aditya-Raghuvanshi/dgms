import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { insertName } from '../utils/adminSlice';
import Welcome from "../assets/Welcome.mp3"

// import AudioPlayer from 'react-audio-player';
//import useSound from 'use-sound';

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [audio, SetAudio] = useState("");

    const Authen=useSelector(store => store.admin); 

    const Playit = async() => {
      await audio.play();
    };
    useEffect(() => {
      SetAudio(new Audio(Welcome));
      // eslint-disable-next-line
    }, []);

    const handleClick=()=>{
        // console.log(email,password);
        // console.log(Authen);
        const indexE=Authen.email.indexOf(email);
        const indexP=Authen.password.indexOf(password);
        // console.log(indexE,indexP);
        if(indexE===indexP && indexE!==-1 && indexP!==-1)
        {
            dispatch(insertName(name));
            navigate("/body");
        }
        else{
            alert("You have Entered wrong id and passsword please try contacting owner you may have to Buy the Subscription");
        }
    }
    
  return (
    <div className='flex'>
      {/* https://t3.ftcdn.net/jpg/02/48/13/84/360_F_248138476_vRdrN0FuKMMOPViRojcK41IqCiFn4J1q.jpg */}
      <img className='h-full w-full' src="https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149007169.jpg" alt="bg-img" /> 
      <form onSubmit={(e)=> e.preventDefault()} className='absolute bg-orange-500  w-3/12 mx-auto my-10 p-12 right-0 left-0 bg-opacity-85'>
            <h1 className='text-white text-3xl p-2 my-4 font-bold '>SIGN IN</h1>
            <input onChange={(e)=> setName(e.target.value)} onClick={()=>Playit()} type="text" placeholder='Name' className='p-2 my-4 w-full bg-gray-600 text-white'/>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-600 text-white'/><br/>
            {/* <p className='text-md py-2 text-red-500'>{errMsg}</p> */}
            <button onClick={()=>handleClick()} className='bg-rose-600 p-3 my-4 w-full hover:bg-red-800 rounded-md'>SIGN IN</button>
        </form>
    </div>
  )
}

export default Login
