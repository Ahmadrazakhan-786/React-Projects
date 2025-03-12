import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem("LoggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  }, [authData])
  


  const handleLogin = (email, password)=>{
    if(email == 'admin@ark.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser('Employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
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
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App