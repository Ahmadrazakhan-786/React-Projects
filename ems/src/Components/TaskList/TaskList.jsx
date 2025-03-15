import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import OngoingTask from './OngoingTask'

const TaskList = ({data}) => {
  
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
        {data.tasks.map((elem, idx)=>{
          
          if(elem.active){
            return <AcceptTask key={idx}/>
          }
          if(elem.newTask){
            return <NewTask  key={idx}/>
          }
          if(elem.completedTask){
            return <CompleteTask key={idx}/>
          }
          if(elem.failedTask){
            return <FailedTask key={idx}/>
          }
          if(elem.ongoing){
            return <OngoingTask key={idx}/>
          }

        })}
    </div>
  )
}

export default TaskList