import React, { useState } from 'react'
import Login from "./components/Login";


function App() {
  return (
    <Login />
  );
}

{/* <div class="grid grid-cols-2 divide-x h-screen">
     
  <div className="bg-purple-400 p-10 ">
    <div className='mt-20'>
  <h1 className="text-2xl mb-5 text-center font-bold">Log in: </h1>
  <h1 className="text-2xl text-center font-semibold">Welcome to login page  </h1>
  <div class="grid grid-cols-2 gap-4 p-5">
  <span className="text-2xl font-medium ">
              Enter the username: 
            </span>
        <input
          type="text"
          className="rounded-lg px-6 border-2 border-neutral-900 p-2 rounded-full"
          placeholder="Username"
        />
        <span className="text-2xl font-medium ">
              Enter the password: 
            </span>
        <input
          type="password"
          className="rounded-lg px-6 border-2 border-neutral-900 p-2 rounded-full"
          placeholder="Password"
        />
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full mr-40">
              Login
            </button>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full ml-40">
              Forgot password?
            </button>
            
  </div>
  <div className='flex justify-center'>
  <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full ">
              Sign up
            </button></div>
  
               
</div>
  </div>
  
  <div className="bg-blue-400" >
  <span className="text-2xl font-bold">
    <p className='text-center p-10'>Login to the chat app which may or may not be made(most prolly wont be made)</p>
              
              </span>

  </div>
</div> */}

export default App;
