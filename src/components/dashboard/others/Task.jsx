import React from 'react'

const Task = ({empdata}) => {
  return (
    <div className=' text-white flex  w-screen justify-between  p-5 gap-5'>
        <div className=' transition-all duration-200 ease-in-out hover:scale-105 flex flex-col items-start justify-center  h-40 w-[25vw] bg-amber-400 rounded-2xl '>
            <h1 className=' text-black font-semibold text-8xl ml-50'>{empdata.task_count.new_task}</h1>
            <h1 className='ml-3 text-black font-semibold text-3xl'>New Task</h1>
            </div>
        <div className=' transition-all duration-200 ease-in-out hover:scale-105 flex flex-col items-start justify-center  h-40 w-[25vw] bg-green-400 rounded-2xl '>
            <h1 className=' text-black font-semibold text-8xl ml-50'>{empdata.task_count.completed}</h1>
            <h1 className='ml-3 text-black font-semibold text-3xl'>Completed</h1>
            </div>
        <div className=' transition-all duration-200 ease-in-out hover:scale-105 flex flex-col items-start justify-center  h-40 w-[25vw] bg-blue-400 rounded-2xl '>
            <h1 className=' text-black font-semibold text-8xl ml-50'>{empdata.task_count.active}</h1>
            <h1 className='ml-3 text-black font-semibold text-3xl'>Active</h1>
            </div>
        <div className=' transition-all duration-200 ease-in-out hover:scale-105 flex flex-col items-start justify-center  h-40 w-[25vw] bg-red-400 rounded-2xl '>
            <h1 className=' text-black font-semibold text-8xl ml-50'>{empdata.task_count.failed}</h1>
            <h1 className=' text-black font-semibold ml-3  text-3xl'>Failed</h1>
            </div>
        

    </div>
  )
}

export default Task