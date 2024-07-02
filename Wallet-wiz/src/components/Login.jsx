
import { useState,useEffect } from 'react';
import axios from 'axios'
import { setStatus } from '../Store/userDataSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export  function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch()
  const userStatus=useSelector(state=>state.userStatus)
  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("hi");
    console.log(userStatus.userStatus.name);
    try {
      const res=await axios.post('http://localhost:3000/login',{email:email,password:password})
      if(res.status==200){
        await dispatch(setStatus({email:email,password:password,name:res.data.name,loggedIn:true}))
        navigate('../landingPage')
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div >
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-sm"> 
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-white">Email</label>
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
        <div className="mb-11">
          <label htmlFor="password" className="block text-white">Password</label>
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
        <button className="mt-4 w-full text-center bg-gray-500 px-6 py-2 rounded" >
          Dont have an account? <a href="/signup" className="text-white 500">Create one</a>
        </button>
      </form>
      </div>
    </div>
  );
}
