import { useState } from 'react';
import axios from 'axios';
import { setStatus } from '../Store/userDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginImage from './login.jpg';
import { sendMoney } from '../Store/userDataSlice';


export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userStatus = useSelector(state => state.userStatus);
  const navigate = useNavigate();
  const gotoSignUp = ()=>{
    navigate('./signup');a
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://wallet-wiz-1-31s4.onrender.com/login', { email: email, password: password });
      if (res.status === 200) {
        const {balance ,moneyReceived,moneySent} =res.data
        await dispatch(setStatus({ email: email, password: password, name: res.data.name, loggedIn: true }));
        await dispatch(sendMoney({balance:balance,moneyReceived:moneyReceived,moneySent:moneySent}))
        navigate('../landingPage');
      }
      else alert('wrong email or password')
    } catch (error) {
      console.log(error);
      alert('wrong email or password')
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex box-border justify-center items-center">
      <div className="bg-[#b09cd3] rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl text-[#3f205d]">Login</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              className="p-2 mt-8 rounded-xl border" 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              className="p-2 rounded-xl border w-full" 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="bg-[#3f205d] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#ca73d4] font-medium" type="submit">
              Login
            </button>
            <button className="mt-4 w-full text-center bg-[#3f205d] px-6 py-2 rounded-xl text-white" onClick={gotoSignUp} >
              Dont have an account? Create one
            </button>
          </form>
        </div>
        <div className="md:block hidden w-1/2">
          <img 
            className="rounded-2xl max-h-[1600px]" 
            src= {loginImage}
            alt="login form image"
          />
        </div>
      </div>
    </section>
  );
}
