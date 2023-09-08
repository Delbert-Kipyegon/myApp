import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/firebase'

  
  function Register() {
    const navigate = useNavigate();

    // redicts to the Login page
    const login = () =>{
        navigate('/login')
    }

    // a useState to store the form data
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // c_password: ''
    });



    // Handle input change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // redirects to the Home page
  const homeNavigate = () =>{
    navigate('/')
  }


  // firebase action on signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    const {email, password} = formData;
    console.log(email);
    console.log(password);
    try{
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        {homeNavigate()}
    }catch(error){
        console.log(error);
    }
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
            <input className="w-full p-2 border rounded" type="email" name="email" id="email" value={formData.email}  onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input className="w-full p-2 border rounded" value={formData.password} onChange={handleChange} type="password" name="password" id="password" />
          </div>
          {/* <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="c-password">
              Confirm Password
            </label>
            <input className="w-full p-2 border rounded" type="password" name="c-password" id="c-password" onChange={handleChange} value={formData.c_password}  />
          </div> */}

          <div className="buttons flex gap-4">
            <button id='sign-up' className="w-[50%] p-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}>
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
