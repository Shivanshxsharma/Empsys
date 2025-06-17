import React from 'react'
import { updateStorage, updateStorageontask } from '../../utils/localstorage';

const Accepttask = ({empdata ,name}) => {
     

  function change(changeto) {
    if (changeto=="complete") {
      let data=JSON.parse(localStorage.getItem("employees"));
         data.forEach((element,idx) => {
          if (element.name==name) {
            element.tasks.forEach((e,i) => {
              if (e.task_title==empdata.task_title) {
                data[idx].tasks[i]={... data[idx].tasks[i],completed:true,active:false,status:"completed"}
                data[idx].task_count.completed=data[idx].task_count.completed+1
                data[idx].task_count.active=data[idx].task_count.active-1;
                const updatedemp=element;
                updateStorageontask(updatedemp);
                
      
              }
            
            });
          }
         });
      
         console.log(data);
         localStorage.setItem("employees",JSON.stringify(data));
        
    }else{
      let data=JSON.parse(localStorage.getItem("employees"));
         data.forEach((element,idx) => {
          if (element.name==name) {
            element.tasks.forEach((e,i) => {
              if (e.task_title==empdata.task_title) {
                data[idx].tasks[i]={... data[idx].tasks[i],failed:true,active:false,status:"failed"}
                data[idx].task_count.failed=data[idx].task_count.failed+1
                data[idx].task_count.active=data[idx].task_count.active-1;
                const updatedemp=element;
                updateStorageontask(updatedemp);
                
      
              }
            
            });
          }
         });
      
         console.log(data);
         localStorage.setItem("employees",JSON.stringify(data));
    }
  }



  return (
    <div className='  transition-all duration-100 ease-in-out hover:scale-105 shrink-0 w-120 h-[95%] rounded-3xl bg-blue-400 '>
             <div className='mt-3 ml-3 bg-black w-20 h-10 rounded-xl text-white flex justify-center items-center'>Accepted</div>

         <div className='   flex justify-between items-center p-2 '>

          <input defaultValue={empdata.task_title} readOnly className=' outline-0 border-0 text-3xl font-semibold w-60 placeholder-black placeholder:opacity-100'  placeholder='Task name'  type="text" /> 

         <input className=''  defaultValue={empdata.date} readOnly type='date' name="" id="" />

         </div>
        
         <textarea defaultValue={empdata.description} readOnly   className=' outline-0 border-0 font-normal text-xl w-[96%] h-[60%] ml-2.5 placeholder-black placeholder:opacity-100' placeholder='.........'></textarea>



         <div className='flex justify-between mt-4 w-[100%] px-5 '>
            <button onClick={()=>change('complete')} className='bg-black py-1 px-2 text-sm font-semibold text-white rounded-xl w-40 h-10 '> mark as completed</button>
            <button onClick={()=>change('failed')} className='bg-black py-1 px-2 text-sm text-white font-semibold rounded-xl w-30 h-10'>mark as failed</button>
         </div>
      </div>
  )
}

export default Accepttask