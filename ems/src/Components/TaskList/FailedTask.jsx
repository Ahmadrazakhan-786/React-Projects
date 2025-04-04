import React from 'react'
import { setLocalStorage } from '../../Utils/localStorage'

const FailedTask = () => {
  
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center text-sm'>
              <h3 className='bg-red-600 px-5 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
            {data.taskDescription}
            </p>
            <div className='mt-4'>
                <button className=' bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask