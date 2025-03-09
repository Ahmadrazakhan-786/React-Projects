import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'

const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  },)
  
  
   return (
    <>
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App