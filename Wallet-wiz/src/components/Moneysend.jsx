import React, { useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
const MoneySend = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const userStatus=useSelector(state=>state.userStatus)
  const handleSend = async(e) => {
    e.preventDefault();
    console.log(`Sending $${amount} to ${email}`);
    try {
      console.log(userStatus.userStatus.email)
      const res=await axios.post('http://localhost:3000/sendMoney',{senderEmail:userStatus.userStatus.email,recieverEmail:email,amount:amount}) 
      console.log(res)
    } catch (error) {
      console.log(error)
    }
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 shadow-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Send Money</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg mt-1 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg mt-1 text-black"
          />
        </div>
        <button 
          onClick={handleSend} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MoneySend;
