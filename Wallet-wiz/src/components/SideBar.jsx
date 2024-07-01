import React from 'react'

function SideBar() {
  return (
    <div className="bg-gray-800 text-white p-6 flex flex-col justify-between w-64">
        <div>
          <img src="/logo.png" alt="Wallet Wiz Logo" className="h-10 mb-10" />
          <nav>
            <a href="#" className="block py-3 hover:bg-gray-700 rounded">
              Receive Money
            </a>
            <a href="#" className="block py-3 hover:bg-gray-700 rounded">
              Send Money
            </a>
          </nav>
        </div>
        <div className="flex items-center">
          <img src="/user-dp.png" alt="User DP" className="h-10 w-10 rounded-full mr-3" />
          <span>John Doe</span>
        </div>
      </div>
  )
}

export default SideBar
