import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setStatus } from '../Store/userDataSlice';
import { useNavigate } from 'react-router-dom';
import signUpImage from './login.jpg';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector(state => state.userStatus);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and include letters and numbers');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('https://wallet-wiz-1-31s4.onrender.com/signUp', { email: email, password: password, name: name });
      if (res.status === 200) {
        await dispatch(setStatus({ email: email, password: password, name: name, loggedIn: true }));
        navigate('../landingPage');
      }
      else alert('try a different email')
    } catch (error) {
      console.log(error);
      alert('try a different email')
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-[#b09cd3] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#3f205d]">Sign Up</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#3f205d]">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#3f205d]">Email</label>
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
              <label htmlFor="password" className="block text-[#3f205d]">Password</label>
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
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-[#3f205d]">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <button className="bg-[#3f205d] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#ca73d4] font-medium" type="submit">
              Sign Up
            </button>
          </form>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-2xl max-h-[1600px]"
            src = {signUpImage}
            alt="signup form image"
          />
        </div>
      </div>
    </div>
  );
}
