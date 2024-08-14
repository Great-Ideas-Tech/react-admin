import React from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope } from 'react-icons/fa';

const MessageDropdown = ({ show, handleClose }) => (
  <div
  style={{zIndex:'999'}}
    className={`absolute right-0 mt-8 w-80 bg-white border border-gray-300 rounded-lg shadow-lg ${show ? 'block' : 'hidden'}`}
    onClick={handleClose}
  >
    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
      <span className="font-semibold">Messages</span>
      <a href="#" className="text-blue-500 text-sm">Mark all as read</a>
    </div>
    <div className="max-h-60 overflow-y-auto">
      <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleClose}>
        <div className="flex items-center">
          <img src="assets/img/jm_denis.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <div className="ml-3">
            <div className="font-medium">Jimmy Denis</div>
            <div className="text-sm text-gray-600">How are you?</div>
            <div className="text-xs text-gray-400">5 minutes ago</div>
          </div>
        </div>
      </a>
      {/* Add more messages as needed */}
    </div>
    <a href="#" className="block px-4 py-2 text-blue-500 text-sm hover:bg-gray-100" onClick={handleClose}>
      See all messages
    </a>
  </div>
);

MessageDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default MessageDropdown;
