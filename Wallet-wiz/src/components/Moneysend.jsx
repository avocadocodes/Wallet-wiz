// src/MoneySend.jsx
import { useState } from 'react';

const MoneySend = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    console.log(`Sending $${amount} to ${email}`);
    // You can add logic to handle the money sending process
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
            className="w-full px-4 py-2 border rounded-lg mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            className="w-full px-4 py-2 border rounded-lg mt-1"
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
