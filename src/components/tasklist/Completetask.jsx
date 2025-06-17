import React from 'react'

const Completetask = ({empdata}) => {
  return (
    <div className='transition-all duration-300 hover:scale-105 ease-in-out shrink-0 w-120 h-[95%] rounded-3xl bg-green-400 '>
             <div className='mt-3 ml-3 bg-black w-22 h-10  rounded-xl text-white flex justify-center items-center'>Completed</div>
              
              <div className='   flex justify-between items-center p-2 '>

          <input defaultValue={empdata.task_title} readOnly className=' outline-0 border-0 text-3xl font-semibold w-60 placeholder-black placeholder:opacity-100'  placeholder='Task name'  type="text" /> 

         <input className=''  defaultValue={empdata.date} readOnly type='date' name="" id="" />

         </div>
        
         <textarea defaultValue={empdata.description}  readOnly  className=' outline-0 border-0 font-normal text-xl w-[96%] h-[75%] ml-2.5 placeholder-black placeholder:opacity-100' placeholder='.........'></textarea>

      </div>
  )
}

export default Completetask