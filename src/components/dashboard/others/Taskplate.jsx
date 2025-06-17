import React, { useState } from 'react'

const Taskplate = ({e,t}) => {

  const d=(task_title,name,status)=>{
    const edata=JSON.parse(localStorage.getItem('employees'));
    const employee=edata.find((e)=>e.name==name);
    const taskfil= employee.tasks.filter((e)=>e.task_title!==task_title);
    const updatedemp={...employee,tasks:taskfil};
    edata.forEach((element, index) => {
      if (element.name === name) {
          edata[index] = updatedemp;
          element.task_count.new_task=element.task_count.new_task-1;
      }
  });
  localStorage.setItem('employees',JSON.stringify(edata));
  window.location.reload();
  }


 

    let color;

  if (t.status === 'active') {
    color = '#63b3ed';
  } else if (t.status === 'new') {
    color = '#fbbf24';
  } else if (t.status === 'failed') {
    color = '#f87171';
  } else if (t.status === 'completed') { 
    color = '#4ade80';
  } else {
    color = '#63b3ed'; // default color
  }

  return (
    <div style={{backgroundColor:color}} className=' p-5 w-[95%] h-20  flex justify-between rounded-xl text-black text-2xl items-center'>
            <h1>{e.name}</h1>
            <h1>{t.task_title}</h1>
            <h1>{t.status}</h1>
            {(t.status=='new')?<button onClick={()=>{d(t.task_title,e.name,t.status)}} className="w-20 h-7 bg-white text-xl rounded-lg flex items-center justify-center hover:bg-gray-100">
            Delete            
          </button>:''}
           
        </div>
  )
}

export default Taskplate