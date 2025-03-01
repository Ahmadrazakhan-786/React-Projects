import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
            <div>
              <h3 className='bg-red-600'>High</h3>
              <h4>28 feb 2025</h4>
            </div>
        </div>
    </div>
  )
}

export default TaskList