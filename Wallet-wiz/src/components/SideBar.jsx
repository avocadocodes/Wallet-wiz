import { useState } from 'react';
import MoneySend from './Moneysend.jsx';
import RequestSend from './Receivemoney.jsx';

function Sidebar() {
  const [showSendModal, setShowSendModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);

  const handleOpenSendModal = () => {
    setShowSendModal(true);
  };

  const handleOpenReceiveModal = () => {
    setShowReceiveModal(true);
  };

  const handleCloseSendModal = () => {
    setShowSendModal(false);
  };

  const handleCloseReceiveModal = () => {
    setShowReceiveModal(false);
  };

  return (
    <div className="bg-gray-800 text-white p-6 flex flex-col justify-between w-64 fixed left-0 h-full">
      <div>
        <img src="/logo.png" alt="Wallet Wiz Logo" className="h-10 mb-10" />
        <nav>
          <button
            onClick={handleOpenReceiveModal}
            className="block w-full text-left py-3 hover:bg-gray-700 rounded"
          >
            Receive Money
          </button>
          <button
            onClick={handleOpenSendModal}
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
      <MoneySend show={showSendModal} onClose={handleCloseSendModal} />
      <RequestSend show={showReceiveModal} onClose={handleCloseReceiveModal} />
    </div>
  );
}

export default Sidebar;
