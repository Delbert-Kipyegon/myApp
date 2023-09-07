import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();

    const login = () =>{
        navigate('/login')
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl mb-4">Sign Up</h1>

        <form className=''>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input className="w-full p-2 border rounded" type="email" name="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input className="w-full p-2 border rounded" type="password" name="password" id="password" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="c-password">
              Confirm Password
            </label>
            <input className="w-full p-2 border rounded" type="password" name="c-password" id="c-password" />
          </div>

          <div className="buttons flex gap-4">
            <button id='sign-up' className="w-[50%] p-2 bg-blue-600 text-white rounded" type="submit">
                Sign Up
            </button>
            <button id='sign-in' className="w-[50%] p-2 bg-blue-600 text-white rounded" 
                onClick={login}
            >
                Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
