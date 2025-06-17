import React from 'react'
import { updateStorage, updateStorageontask } from '../../utils/localstorage';

const Newtask = ({empdata,name}) => {


  function accept() {
    let data=JSON.parse(localStorage.getItem("employees"));
   data.forEach((element,idx) => {
    if (element.name==name) {
      element.tasks.forEach((e,i) => {
        if (e.task_title==empdata.task_title) {
          data[idx].tasks[i]={... data[idx].tasks[i],active:true,new_task:false,status:"active"}
          data[idx].task_count.active=data[idx].task_count.active+1
          data[idx].task_count.new_task=data[idx].task_count.new_task-1;
          const updatedemp=element;
          updateStorageontask(updatedemp);
          

        }
      
      });
    }
   });

   console.log(data);
   localStorage.setItem("employees",JSON.stringify(data));
  
    
     


  }





  
  return (
    <div className='transition-all duration-300 hover:scale-105 ease-in-out shrink-0 w-120 h-[95%] rounded-3xl bg-amber-400 '>
             <div className='mt-3 ml-3 bg-black w-20 h-10 rounded-xl text-white flex justify-center items-center'>New</div>
              <div className='   flex justify-between items-center p-2 '>

          <input defaultValue={empdata.task_title}  readOnly className='  outline-0 border-0 text-3xl font-semibold w-60 placeholder-black placeholder:opacity-100'  placeholder='Task name'  type="text" /> 

         <input className=''  defaultValue={empdata.date} readOnly type='date' name="" id="" />

         </div>
        
         <textarea defaultValue={empdata.description} readOnly   className=' outline-0 border-0 font-normal text-xl w-[96%] h-[60%] ml-2.5 placeholder-black placeholder:opacity-100' placeholder='.........'></textarea>
         <div className='flex justify-center mt-4 w-[100%] px-5 '>
            <button  onClick={accept}  className='bg-black text-white py-1 px-2 text-xl font-semibold rounded-xl w-40 h-10 '> Accept Task</button>

         </div>
      </div>
  )
}

export default Newtask