import React, { useState } from 'react'

const Login = () => {

     const [email, setemail] = useState('')
     const [password, setpassword] = useState('')
      
     const submitHandler = (e) =>{
        e.preventDefault()
        console.log("email is", email);
        console.log("password is",password);

        setemail("")
        setpassword("")
     } 

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-2xl border-emerald-600 py-18 px-10'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value = {email}
                onChange={(e)=>{
                  setemail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
                />

                <input 
                value={password}
                onChange={(e)=>{
                  setpassword(e.target.value)
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter your password'
                 />

                <button  className=' mt-7 text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login