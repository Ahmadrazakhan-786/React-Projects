import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { setLocalStorage } from '../../Utils/localStorage'

const  AllTask = () =>{
  // setLocalStorage.clear()
    
    const [userData, setuserData] = useContext(AuthContext)
    

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-7'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>

        </div>

       <div className=''>
       {userData.map(function(elem,idx){ 
            return <div key={idx} className='border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-red-500'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-500'>{elem.taskNumbers.completedTask}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskNumbers.failedTask}</h5>
        </div>
        })}
       </div>    
    </div>
  )
}

export default AllTask