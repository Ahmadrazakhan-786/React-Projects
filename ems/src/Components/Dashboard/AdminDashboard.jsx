// import React from 'react'
// import Header from '../Others/Header'
// import CreateTask from '../Others/CreateTask'
// import AllTask from '../Others/AllTask'

// const AdminDashboard = (props) => {
//   return (
//     <div className='h-screen w-full p-10'>
//         <Header changeUser={props.changeUser}/>
//         <CreateTask />
//         <AllTask />
//     </div>
//   )
// }

// export default AdminDashboard

import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = ({ changeUser }) => {
    return (
        <div className='min-h-screen bg-[#0a0a0a] p-6 md:p-10'>
            <Header changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard