import React from 'react'
import Taskplate from './Taskplate'
import { useEffect } from 'react'
const Alltask = ({empdata}) => {


  return (
    <div id='task-panel' className=' w-[90%] h-[100%] gap-5 overflow-y-auto bg-[#111111] mt-5 mb-4 border-gray-400 rounded-xl border-2 p-5 flex items-center flex-col'>
          
        {
            empdata.map((e,idx)=>{
                return  e.tasks.map((t)=>{
                    return < Taskplate e={e} t={t}/>
                })
            })
        }
         
    </div>
  )
}

export default Alltask