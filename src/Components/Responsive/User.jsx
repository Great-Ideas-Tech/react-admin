import React from 'react';
import { FaUser, FaEnvelope, FaWallet, FaInbox, FaCog, FaSignOutAlt } from 'react-icons/fa';

const User = () => {
  return (
    <div className="p-6 max-w-md mx-auto md:hidden bg-white shadow-md rounded-lg">
      {/* User Info */}
      <div className="flex items-center mb-6">
        <img
          src="/user.jpg"
          alt="User"
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="space-y-4">
        <button className="w-full flex items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <FaUser className="text-gray-600 mr-3" />
          <span className="text-gray-700">View Profile</span>
        </button>
        <button className="w-full flex items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <FaUser className="text-gray-600 mr-3" />
          <span className="text-gray-700">My Profile</span>
        </button>
        <button className="w-full flex items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <FaWallet className="text-gray-600 mr-3" />
          <span className="text-gray-700">My Balance</span>
        </button>
        <button className="w-full flex items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <FaInbox className="text-gray-600 mr-3" />
          <span className="text-gray-700">Inbox</span>
        </button>
        <button className="w-full flex items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <FaCog className="text-gray-600 mr-3" />
          <span className="text-gray-700">Account Settings</span>
        </button>
        <button className="w-full flex items-center p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <FaSignOutAlt className="text-gray-600 mr-3" />
          <span className="text-gray-700">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default User;
