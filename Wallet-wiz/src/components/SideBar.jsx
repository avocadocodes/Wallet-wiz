// src/Sidebar.jsx
import  { useState } from 'react';
import MoneySend from './Moneysend.jsx';

function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-800 text-white p-6 flex flex-col justify-between w-64">
      <div>
        <img src="/logo.png" alt="Wallet Wiz Logo" className="h-10 mb-10" />
        <nav>
          <a href="#" className="block py-3 hover:bg-gray-700 rounded">
            Receive Money
          </a>
          <button
            onClick={handleOpenModal}
            className="block w-full text-left py-3 hover:bg-gray-700 rounded"
          >
            Send Money
          </button>
        </nav>
      </div>
      <div className="flex items-center">
        <img src="/user-dp.png" alt="User DP" className="h-10 w-10 rounded-full mr-3" />
        <span>John Doe</span>
      </div>
      <MoneySend show={showModal} onClose={handleCloseModal} />
    </div>
  );
}

export default Sidebar;
