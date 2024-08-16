import React from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MessageDropdown = ({ show, handleClose }) => (
  <div
    style={{ zIndex: '999' }}
    className={`absolute right-0 mt-8 transition-all duration-300 transform w-80 bg-white border border-gray-300 rounded-lg shadow-lg ${
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}
    onClick={handleClose}
  >
    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
      <span className="font-semibold text-lg">Messages</span>
      <Link to="#" className="text-blue-500 text-sm hover:underline">Mark all as read</Link>
    </div>
    <div className="max-h-60 overflow-y-auto">
      <Link to="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleClose}>
        <div className="flex items-center">
          <img src="/img/jm_denis.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          <div className="ml-3">
            <div className="font-medium text-gray-900">Jimmy Denis</div>
            <div className="text-sm text-gray-600">How are you?</div>
            <div className="text-xs text-gray-400">5 minutes ago</div>
          </div>
        </div>
      </Link>
      {/* Additional messages can be added here */}
    </div>
    <Link to="#" className="block px-4 py-2 text-blue-500 text-sm text-center hover:bg-gray-100" onClick={handleClose}>
      See all messages
    </Link>
  </div>
);

MessageDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MessageDropdown;
