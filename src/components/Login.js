import React, { useState } from 'react'

import '../styl.css';
function Login() {
   

  return (
    <div class="sm:grid grid-cols-1 divide-x h-screen">
    
  <div className="bg-gray-50 ">
  <nav class="bg-white px-2 sm:px-4 py-2.5  border-b  border-gray-200  text-2xl font-semibold shadow-sm"> Chat app Login</nav>
    <div className='mt-10'>
    <div className='lg:p-20 p-4'>
      <div className='shadow-md p-5 mb-5'>
  <h1 className="text-2xl mb-5 ml-5 text font-bold">Log in: </h1>
  <h1 className="text-xl text  ml-5">Welcome to login page  </h1>
  <div class="grid grid-cols-2 gap-4 p-5 mt-5">
  <span className="text-2xl font-medium ">
              Enter the username: 
            </span>
        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Username"
        />
        <span className="text-2xl font-medium ">
              Enter the password: 
            </span>
        <input
          type="password"
          className="rounded-lg px-6 border-2 border-neutral p-2 rounded"
          placeholder="Password"
        />
        
       
            
  </div>
  </div>
  <div className='float-right'>
        <button className="bg-fuchsia-800/90 hover:bg-fuchsia-900 text-white font-bold py-2 px-5 rounded-md ">
              Log in
            </button>
            </div>
  <div className='flex justify-center p-10'>
  <h1 className="text-2xl text-center font-semibold mr-2">Don't have an account?</h1>
  
  <button className="text-fuchsia-900 hover:text-purple-700 text-xl font-bold" >
              Sign up
            </button></div>
  
               

</div>
</div>
  </div>
 
</div>
  )
}

export default Login

