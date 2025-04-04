import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
// import OngoingTask from './OngoingTask'

const TaskList = ({data}) => {
    // console.log(data)
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
        {data.tasks.map((elem, idx)=>{
          
          if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
          }
          if(elem.newTask){
            return <NewTask  key={idx} data={elem}/>
          }
          if(elem.completedTask){
            return <CompleteTask key={idx} data={elem}/>
          }
          if(elem.failedTask){
            return <FailedTask key={idx} data={elem}/>
          }
          // if(elem.ongoing){
          //   return <OngoingTask key={idx} data={elem}/>
          // }

        })}
    </div>
  )
}

export default TaskList