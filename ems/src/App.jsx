import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'

const App = () => {


  const [user, setUser] = useState(null)

  const handleLogin = (email, password)=>{
    if(email == 'admin@ark.com' && password == '123'){
      setUser('admin')
      console.log(user)
    }else if(email == 'user@ark.com' && password == '123'){
      setUser('Employee')
      console.log(user)
    }
    else{
      alert('Invalid Credentials')
    }
  }
    
   return (
    <>
    {!user ? <Login handleLogin={handleLogin} /> : ''}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App