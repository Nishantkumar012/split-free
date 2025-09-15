import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'

function Signup() {

  const navigate = useNavigate()
  
  // local state
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

   
  const handleSignup = async (e: React.FormEvent) =>{
       e.preventDefault();
       setError("");
       setLoading(true);
  

    try {
         
        await axiosInstance.post("/auth/signup", {
             name,email,password
        });

        alert("signup Successfull ! please Login");
        navigate("/login")
         
   } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }

}

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
        
          <h2 className='text-2xl font-bold text-center mb-6'>Create Account</h2>

            <form onSubmit={handleSignup} className='space-y-4'>
                <input
                  type='text'
                  placeholder='Name'
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
                />

                <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

            <button
            type="submit"
                disabled={loading}
                className= "w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition diabled:opacity-50">
                 
                 {loading? "signing up... ": "Signup"}
            </button>
            </form>

                 {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>  
        
        </div>
        
  )
}

export default Signup