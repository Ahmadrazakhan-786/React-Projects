// import React, { useState } from 'react'

// const Login = ({handleLogin}) => {


//      const [email, setemail] = useState('')
//      const [password, setpassword] = useState('')
      
//      const submitHandler = (e) =>{
//         e.preventDefault()
//         handleLogin(email,password)
//         setemail("")
//         setpassword("")
//      } 

//   return (
//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-2xl border-emerald-600 py-18 px-15'>
//             <form 
//             onSubmit={(e)=>{
//                 submitHandler(e)
//             }}
//             className='flex flex-col items-center justify-center'>
//                 <input 
//                 value = {email}
//                 onChange={(e)=>{
//                   setemail(e.target.value)
//                 }}
//                 required 
//                 className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
//                 />

//                 <input 
//                 value={password}
//                 onChange={(e)=>{
//                   setpassword(e.target.value)
//                 }}
//                 required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter password'
//                  />

//                 <button  className=' mt-7 text-white outline-none border-none bg-emerald-600 text-xl py-3 px-27 rounded-full  placeholder:text-white'>Login</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { showSuccessToast, showErrorToast } from '../../Utils/toastConfig'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        try {
            const loginSuccess = handleLogin(email, password)
            
            if (loginSuccess) {
                const isAdmin = email === "admin@example.com"
                showSuccessToast(isAdmin ? 'Welcome back, Admin! 👋' : 'Successfully logged in!')
                setEmail("")
                setPassword("")
            } else {
                showErrorToast('Invalid credentials. Please try again.')
            }
        } catch (error) {
            showErrorToast('Login failed. Please check your credentials.')
        }
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-[#0a0a0a]'>
            <div className='bg-[#1e1e1e] shadow-xl rounded-2xl p-12 w-full max-w-md'>
                <h2 className='text-3xl font-bold text-center mb-8 text-gray-100'>Welcome Back</h2>
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-4 transition-all'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 mb-6 transition-all'
                        type="password"
                        placeholder='Enter your password'
                    />
                    <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login