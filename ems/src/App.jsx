import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

const App = () => {


  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("LoggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])
  


  const handleLogin = (email, password)=>{
    if(email == 'admin@ark.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
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
    {user == 'admin' ? <AdminDashboard/> : (user == 'employee' ?  <EmployeeDashboard data={loggedInUserData}/>: null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    
    </>
  )
}

export default App




// const employees = [
//   {
//       "id": 1,
//       "firstName": "Amit",
//       "email": "employee1@example.com",
//       "password": "123",
//       "tasks": [
//           {
//               "taskTitle": "Bug Fixing",
//               "taskDescription": "Fix UI alignment issue in the dashboard.",
//               "taskDate": "2025-03-10",
//               "category": "Development",
//               "active": true,
//               "newTask": true,
//               "completedTask": false,
//               "failedTask": false
//           },
//           {
//               "taskTitle": "Code Review",
//               "taskDescription": "Review pull requests from the frontend team.",
//               "taskDate": "2025-03-12",
//               "category": "Code Review",
//               "active": false,
//               "newTask": false,
//               "completedTask": true,
//               "failedTask": false
//           }
//       ],
//       "taskNumbers": { "active": 1, "newTask": 1, "completedTask": 1, "failedTask": 0 }
//   },
//   {
//       "id": 2,
//       "firstName": "Rajesh",
//       "email": "employee2@example.com",
//       "password": "123",
//       "tasks": [
//           {
//               "taskTitle": "Database Optimization",
//               "taskDescription": "Optimize slow-running SQL queries.",
//               "taskDate": "2025-03-11",
//               "category": "Database",
//               "active": true,
//               "newTask": false,
//               "completedTask": false,
//               "failedTask": false
//           },
//           {
//               "taskTitle": "Security Audit",
//               "taskDescription": "Perform security checks on API endpoints.",
//               "taskDate": "2025-03-13",
//               "category": "Security",
//               "active": false,
//               "newTask": false,
//               "completedTask": false,
//               "failedTask": true
//           },
//           {
//               "taskTitle": "Testing",
//               "taskDescription": "Write unit tests for the authentication module.",
//               "taskDate": "2025-03-15",
//               "category": "Testing",
//               "active": false,
//               "newTask": true,
//               "completedTask": false,
//               "failedTask": false
//           }
//       ],
//       "taskNumbers": { "active": 1, "newTask": 1, "completedTask": 0, "failedTask": 1 }
//   },
//   {
//       "id": 3,
//       "firstName": "Sandeep",
//       "email": "employee3@example.com",
//       "password": "123",
//       "tasks": [
//           {
//               "taskTitle": "Client Meeting",
//               "taskDescription": "Discuss project updates with the client.",
//               "taskDate": "2025-03-09",
//               "category": "Meeting",
//               "active": false,
//               "newTask": false,
//               "completedTask": true,
//               "failedTask": false
//           },
//           {
//               "taskTitle": "Frontend Fixes",
//               "taskDescription": "Fix broken buttons on mobile view.",
//               "taskDate": "2025-03-11",
//               "category": "UI/UX",
//               "active": true,
//               "newTask": true,
//               "completedTask": false,
//               "failedTask": false
//           },
//           {
//               "taskTitle": "Performance Testing",
//               "taskDescription": "Analyze API response times.",
//               "taskDate": "2025-03-14",
//               "category": "Testing",
//               "active": false,
//               "newTask": false,
//               "completedTask": false,
//               "failedTask": true
//           }
//       ],
//       "taskNumbers": { "active": 1, "newTask": 1, "completedTask": 1, "failedTask": 1 }
//   },
//   {
//       "id": 4,
//       "firstName": "Neha",
//       "email": "employee4@example.com",
//       "password": "123",
//       "tasks": [
//           {
//               "taskTitle": "Feature Development",
//               "taskDescription": "Implement dark mode for the app.",
//               "taskDate": "2025-03-10",
//               "category": "Development",
//               "active": true,
//               "newTask": false,
//               "completedTask": false,
//               "failedTask": false
//           },
//           {
//               "taskTitle": "Code Documentation",
//               "taskDescription": "Update API documentation.",
//               "taskDate": "2025-03-12",
//               "category": "Documentation",
//               "active": false,
//               "newTask": false,
//               "completedTask": true,
//               "failedTask": false
//           }
//       ],
//       "taskNumbers": { "active": 1, "newTask": 0, "completedTask": 1, "failedTask": 0 }
//   },
//   {
//       "id": 5,
//       "firstName": "Priya",
//       "email": "employee5@example.com",
//       "password": "123",
//       "tasks": [
//           {
//               "taskTitle": "Server Maintenance",
//               "taskDescription": "Upgrade the production server to the latest version.",
//               "taskDate": "2025-03-11",
//               "category": "IT",
//               "active": true,
//               "newTask": true,
//               "completedTask": false,
//               "failedTask": false
//           },
//           {
//               "taskTitle": "Client Report",
//               "taskDescription": "Prepare the monthly report for stakeholders.",
//               "taskDate": "2025-03-15",
//               "category": "Management",
//               "active": false,
//               "newTask": false,
//               "completedTask": true,
//               "failedTask": false
//           }
//       ],
//       "taskNumbers": { "active": 1, "newTask": 1, "completedTask": 1, "failedTask": 0 }
//   }
// ];
