import React from 'react'

const Header = ({empdata ,logout}) => {
  const name=empdata.name+ " id :"+empdata.id;
  return (
    <div  className='  text-white flex flex-row justify-between p-10 '>
        <div>
        <h1 className='text-4xl'>Hello</h1>
        <h1 className='font-semibold text-7xl'>{name} 👋</h1>  
        </div>
        
        <button className='text-xl bg-red-500 border-0 rounded-2xl w-20 h-10 ' onClick={()=>{
          logout();
        }} >Log-out</button>
    </div>
  )
}

export default Header