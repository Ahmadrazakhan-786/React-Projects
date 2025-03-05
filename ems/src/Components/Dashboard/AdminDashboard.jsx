import React from 'react'
import Header from '../Others/Header'

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
        <Header />

        <div>
            <form className='flex flex-wrap w-full bg-red-200 items-start justify-between'>
              <div className='w-1/2'>
              <div><h3>Task Title</h3>
              <input type="text" placeholder='Make a UI design' /></div>
              <div><h3>Date</h3>
                <input type="date" /></div>
               <div> <h3>Assign to</h3>
               <input type="text" placeholder='Employee name' /></div>
                <div><h3>Category</h3>
                <input type="text" placeholder='Design, Dev, etc.' /></div>
              </div>
                <div><h3>Task Title</h3>
                <input type="text" placeholder='Make a UI design' /></div>
                <div className=''><h3>Description</h3>
                <textarea name="" id="" cols="30" rows="10"></textarea></div>
                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard