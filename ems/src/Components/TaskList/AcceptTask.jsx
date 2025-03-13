import React from 'react'

const AcceptTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-fuchsia-400 rounded-xl'>
    <div className='flex justify-between items-center text-sm'>
      <h3 className='bg-red-600 px-5 py-1 rounded'>High</h3>
      <h4 className='text-sm'>28 feb 2025</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>Solve DSA Problem</h2>
    <p className='text-sm mt-2'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ex.
    </p>
    <div className='flex justify-between mt-3'>
        <button className='bg-green-400 py-1 px-2 text-sm'>Mark as Submittted</button>
        <button className='bg-red-400 py-1 px-2 text-sm'>Mark as Failed</button>
    </div>
</div>
  )
}

export default AcceptTask