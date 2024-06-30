
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios'

export  function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res=await axios.post('http://localhost:3000/login',{email:email,password:password}).then((res)=>{console.log(res)}).catch((e)=>{console.log(e)})
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div >
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-sm"> 
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        <button className="mt-4 text-center">
          Dont have an account? <a href="/signup" className="text-blue-500">Create one</a>
        </button>
      </form>
      </div>
    </div>
  );
}
