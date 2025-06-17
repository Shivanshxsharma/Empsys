import React from 'react'

import { useState } from 'react'
import { updateStorage } from '../../utils/localstorage'

const Signup = ({Signuphandler,change}) => {


        const[email,setemail]=useState('')
        const[pass,setpass]=useState('')
        const[cpass,setcpass]=useState('')
        const[p,setp]=useState('password');
        const [name, setname] = useState('')
        const [id, setid] = useState('')

        const [color, setcolor] = useState('#4E9F3D');




        const submithandler=(e)=>{
          e.preventDefault();
          const newemployee={
            "name": name,
            "id": id,
            "email": email,
            "password": cpass,
            'tasks':[],
            "task_count": {
              "active": 0,
              "new_task": 0,
              "failed": 0,
              "completed": 0
            }
          }

          const  data=JSON.parse(localStorage.getItem('employees'));
         console.log(data);
         const checkid=data.find((e)=>e.id===id|| e.email===email);
         console.log(checkid);
          if (checkid) {
            alert("Id/Email already taken please enter your unique Employee id/Email")
          }else{

            const d=  updateStorage(newemployee);
          localStorage.setItem('employees',JSON.stringify(d));
          Signuphandler(name,email,pass);
          setcpass('')
          setemail('')
          setname('')
          setid('')
          setcpass('')
          // console.log(newdata);
          
          console.log('new employee Added ', "name ", name )
          }

          




        }
          
      

        const check=(pass,confirmedpass)=>{
          if (confirmedpass!==pass) {
            setcolor('red');
          }else{
            setcolor('#4E9F3D')
          }
        }

  return (



    
    <div  className=' w-screen h-screen flex items-center justify-center'>
          
        <div className='w-160 h-240 border-2 rounded-xl  border-[#4E9F3D] flex flex-col gap-20 '>
              <div > <h1 className='p-5 h-5 w-[100] text-white text-4xl'>Sign-in</h1></div>
            <form onSubmit={(e)=>{submithandler(e)}} className='flex flex-col gap-10 items-center justify-center'>

              <input id='id'
               className=' transition-all duration-200 ease-in-out hover:scale-105 p-6 w-120 h-20 border-4 rounded-[20px] border-[#4E9F3D] text-2xl text-white'  placeholder='enter id'
               onChange={(e)=>{setid(e.target.value);}}
               value={id} type="number" />
              <input id='name'
               className=' transition-all duration-200 ease-in-out hover:scale-105 p-6 w-120 h-20 border-4 rounded-[20px] border-[#4E9F3D] text-2xl text-white'  placeholder='enter name'
               onChange={(e)=>{setname(e.target.value);}}
               value={name} type="text" />
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
               <input required
               id='cpass'  style={{borderColor:color}}
               className= ' transition-all duration-200 ease-in-out hover:scale-105 p-6 w-120 h-20 border-4 rounded-[20px]  text-2xl text-white' type={p} placeholder='confirm password' 
               onChange={(e)=>{setcpass(e.target.value); check(pass,e.target.value)}}
               value={cpass}/>
               <button onClick={(e)=>{
                if (p=="password") {
                   setp("text"); 
                }else{
                    setp("password");   
                }
                   
               }}>👁️</button>
               <button onClick={()=>{change('log')}}   className=' transition-all duration-200 ease-in-out  border-0 pl-4 pr-5 pt-1 pb-2 hover:scale-110  text-white text-xl ' >Log-in</button>
               <button type="submit"  className=' transition-all duration-200 ease-in-out bg-[#4E9F3D] border-4 pl-4 pr-5 pt-1 pb-2 hover:scale-110 rounded-4xl text-white text-4xl ' >Sign-in</button>
            </form>

        </div>

    </div>
  )
}

export default Signup