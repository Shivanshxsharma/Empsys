import React, { useState } from 'react'

const Login = ({change,Loginhandler}) => {

    const[email,setemail]=useState('')
    const[pass,setpass]=useState('')
    const[p,setp]=useState('password')

    const submithandler=(e)=>{
        e.preventDefault();
        Loginhandler(email,pass);
        console.log("form submitted");
        setemail('')
        setpass('')
    }
   
  return (
    <div  className=' w-screen h-screen flex items-center justify-center'>
          
        <div className='w-160 h-190 border-2 rounded-xl  border-[#4E9F3D] flex flex-col gap-40 '>
              <div > <h1 className='p-5 text-white text-4xl'>LOG-IN</h1></div>
            <form onSubmit={(e)=>{submithandler(e)}} className='flex flex-col gap-10 items-center justify-center'>
               <input required 
               id='email'
               className=' transition-all duration-200 ease-in-out hover:scale-105 p-6 w-120 h-20 border-4 rounded-[20px] border-[#4E9F3D] text-2xl text-white' type="email" placeholder='enter email'
               onChange={(e)=>{setemail(e.target.value);}}
               value={email}/>
               <input required
               id='pass' 
               className= ' transition-all duration-200 ease-in-out hover:scale-105 p-6 w-120 h-20 border-4 rounded-[20px] border-[#4E9F3D] text-2xl text-white' type={p} placeholder='enter password' 
               onChange={(e)=>{setpass(e.target.value);}}
               value={pass}/>
               <button onClick={(e)=>{
                if (p=="password") {
                   setp("text"); 
                }else{
                    setp("password");   
                }
                   
               }}>👁️</button>
               <button onClick={()=>{change('sign')}}    className=' transition-all duration-200 ease-in-out  border-0 pl-4 pr-5 pt-1 pb-2 hover:scale-110  text-white text-xl ' >Sign-in</button>
               <button type="submit"  className=' transition-all duration-200 ease-in-out bg-[#4E9F3D] border-4 pl-4 pr-5 pt-1 pb-2 hover:scale-110 rounded-4xl text-white text-4xl ' >Log-in</button>
            </form>

        </div>

    </div>
  )
}

export default Login