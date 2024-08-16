import React from 'react';
import PropTypes from 'prop-types';
import { FaUserPlus, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotificationDropdown = ({ show, handleClose }) => (
  <div
    style={{ zIndex: '999' }}
    className={`absolute right-0 transition-all duration-300 transform mt-8 w-80 bg-white border border-gray-300 rounded-lg shadow-lg ${
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}
    onClick={handleClose}
  >
    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
      <span className="font-semibold text-lg">You have 4 new notifications</span>
    </div>
    <div className="max-h-60 overflow-y-auto">
      <Link to="*" className="block px-4 py-2 hover:bg-gray-100" onClick={handleClose}>
        <div className="flex items-center">
          <div className="flex-shrink-0  p-2 rounded-full">
          <img src="/img/jm_denis.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          </div>
          <div className="ml-3">
            <div className="font-medium text-gray-900">New user registered</div>
            <div className="text-sm text-gray-600">5 minutes ago</div>
          </div>
        </div>
      </Link>
      {/* Add more notifications here */}
    </div>
    <Link
      to="*"
      className="px-4 py-2 text-blue-500 text-sm hover:bg-gray-100 flex items-center justify-between"
      onClick={handleClose}
    >
      See all notifications
      <FaAngleRight />
    </Link>
  </div>
);

NotificationDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default NotificationDropdown;
