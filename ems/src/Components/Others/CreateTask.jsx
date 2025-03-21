import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

    const [userData, setuserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskdate, setTaskdate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) =>{
      e.preventDefault()

     setNewTask({taskTitle, taskDescription, taskdate, category, active:false, newTask:true, failedTask:false, completedTask:false})

     const data = userData

     data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      }
     }) 
     setuserData(data)
     console.log(data);


     setTaskTitle('')
     setCategory('')
     setAssignTo('')
     setTaskdate('')
     setTaskDescription('')

    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} 
            className='flex flex-wrap w-full items-start justify-between'
            >
              <div className='w-1/2'>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
              </div>
              <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                  value={taskdate}
                  onChange={(e)=>{
                    setTaskdate(e.target.value)
                  }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                </div>
               <div> 
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
               <input 
               value={assignTo}
               onChange={(e)=>{
                 setAssignTo(e.target.value)
               }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
               </div>
                <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input  
                value={category}
                onChange={(e)=>{
                  setCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Dev, etc.' />
                </div>
              </div>
              
                <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                  setTaskDescription(e.target.value)
                }}
                className='w-full h-44 text-sm py-2 px-10 rounded outline-none bg-transparent border-[1px] border-gray-400 ' name="" id="" ></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
                
            </form>
        </div>
  )
}

export default CreateTask