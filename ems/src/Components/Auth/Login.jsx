import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-2xl border-emerald-600 py-18 px-10'>
            <form className='flex flex-col items-center justify-center'>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button  className=' mt-7 text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login