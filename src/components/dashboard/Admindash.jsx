import React, { useState } from 'react'
import Header from './others/Header'
import Alltask from './others/Alltask'

const Admindash = ({empdata,logout,data}) => {
  const[task_title,settask_title]=useState('')
  const [category, setcategory] = useState('')
  const [date, setdate] = useState('')
  const [desc, setdesc] = useState('')
  const [asign, setasign] = useState('')
  const [id, setid] = useState('')
  



  const submithandler=(e)=>{
    e.preventDefault();

    const task={task_title,description:desc,date,category,new_task:true,completed:false,failed:false,active:false,status:'new'};
    const edata=JSON.parse(localStorage.getItem('employees'))
    console.log(edata)
    edata.forEach(element => {
      if (asign==element.name||id==element.id) {
        element.tasks.push(task);
        element.task_count.new_task=element.task_count.new_task+1;
      }

    });
  localStorage.setItem('employees',JSON.stringify(edata)); 
  window.location.reload();
  



    setasign('')
    setcategory('')
    setdate('')
    setdesc('')
    settask_title('')
  }

  
  const empd=empdata;
  return (
    <div id='admin'  className=' overflow-auto  w-screen h-screen'>
        <Header empdata={empd} logout={logout}/>

        <div className=' w-screen p-15'>
            <h1 className='text-white text-4xl font-semibold'>Create Task</h1>
            <form onSubmit={submithandler}  className=' flex flex-col items-center mt-10'>
                <div className=' w-[100%] h-50 flex items-start justify-start  '>
                <div>
                <label className='text-white  text-xl' htmlFor="title">Task Title</label> <br />
                <input required value={task_title} onChange={(e)=>{settask_title(e.target.value)}} type="text" className=' p-5 text-2xl text-opacity-100  text-white w-130 h-15 outline-0 bg-[#ffffff20] border-0  rounded-xl' name="title"  />
                </div>
                <div className='ml-100'>
                    <label className='text-white  text-xl' htmlFor="desc">Description</label>
                     <textarea required value={desc}  onChange={(e)=>{setdesc(e.target.value)}} name=' desc' className='  mt-5 p-5 text-2xl text-white outline-0 border-0 w-200 h-40 bg-[#ffffff20] rounded-xl  ' ></textarea>
                </div>
                
                </div>

                <div className=' w-[100%] h-50 flex items-start justify-start '>

                <div className='flex flex-col'>
                <label className='text-white  text-xl mt-5' htmlFor="title">Asign To</label> <br />
                <input required onChange={(e)=>{setasign(e.target.value)}} value={asign} type="text" className=' p-5 text-2xl text-opacity-100  text-white w-130 h-15 outline-0 bg-[#ffffff20] border-0  rounded-xl' name="title"  />
                <label className='text-white  text-xl mt-5' htmlFor="title">Employee Id</label> <br />
                <input required placeholder='Enter Employee Id' value={id} onChange={(e)=>{setid(e.target.value)}} className=' p-5 text-2xl text-opacity-100  text-white w-130 h-15 outline-0 bg-[#ffffff20] border-0  rounded-xl  ' type="number" name="" id=""  />
                <label className='text-white  text-xl mt-5' htmlFor="title">Date</label> <br />
                <input required value={date} onChange={(e)=>{setdate(e.target.value)}} className=' p-5 text-2xl text-opacity-100  text-white w-130 h-15 outline-0 bg-[#ffffff20] border-0  rounded-xl ' type="date" name="" id="" />
                </div>



                <div className='ml-100 flex flex-col  '>
                    <label className=' mt-5 text-white  text-xl' htmlFor="desc">Category</label>
                     <input required value={category} onChange={(e)=>{setcategory(e.target.value)}} type='text' name='desc' className=' mt-5 p-5 text-2xl text-white outline-0 border-0 w-130 h-15 bg-[#ffffff20] rounded-xl  ' ></input>
                </div>
                </div>


             <button className=' font-bold text-3xl text-white transition-all duration-200 ease-in-out w-250 h-20 bg-black rounded-2xl hover:scale-110 hover:shadow-2xl shadow-emerald-700 mt-60' type="submit">Create Task</button>
              
                 
            </form>
        </div>
 
         <div className='flex  flex-col items-center w-screen h-100'>
         <h1 className='text-white text-3xl mb-5 font-semibold'>All Tasks</h1>
         <Alltask empdata={data}/>

         </div>



    </div>
  )
}

export default Admindash