import React from 'react'
import Header from './others/Header'
import Task from './others/Task'
import Tasklist from '../tasklist/Tasklist'

const Empdash = ({empdata,logout}) => {
  const empd=empdata;
  return (
    <>
    <div className='w-screen h-screen bg-[#111111]'>
            <Header empdata={empd} logout={logout}/>
            <Task empdata={empd}/>
          <Tasklist empdata={empd}/>
      </div>
        
    </>
  )
}

export default Empdash