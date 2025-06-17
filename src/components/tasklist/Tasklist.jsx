import React from 'react'
import Accepttask from './accepttask'
import Newtask from './Newtask'
import Completetask from './completetask'
import Failedtask from './failedtask'

const Tasklist = ({empdata}) => {
  return (
    <div className='flex justify-center items-center w-screen h-[55%] mt-10'>

    <div id='task-scroll' className='  transition-all duration-100 ease-in-out overflow-x-auto flex flex-nowrap  justify-start items-center h-[100%] gap-5 w-480  p-5'>
      {empdata.tasks.map((e)=>{
         if (e.new_task) {
            return <Newtask empdata={e} name={empdata.name}/>
         }
         if (e.completed) {
            return <Completetask empdata={e} name={empdata.name}/>
         }
         if (e.active) {
            return <Accepttask empdata={e} name={empdata.name}/>
         }
         if (e.failed) {
            return <Failedtask empdata={e} name={empdata.name}/>
         }
      })}
      </div>
    </div>
    
  )
}

export default Tasklist