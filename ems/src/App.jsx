import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setuserData] = useContext(AuthContext)

 useEffect(()=>{
      const loggedInUser = localStorage.getItem('loggedInUser')
      
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setloggedInUserData(userData.data)
      }

 },[])
  


  const handleLogin = (email, password)=>{
    if(email == 'admin@ark.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      }
    }
    else{
      alert('Invalid Credentials')
    }
  }

  // const data = useContext(AuthContext)
  // console.log(data)
    
   return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ?  <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>: null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App
