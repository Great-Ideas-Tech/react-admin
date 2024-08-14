import React from 'react';
import PropTypes from 'prop-types';
import { FaBell, FaUserPlus, FaAngleRight } from 'react-icons/fa';

const NotificationDropdown = ({ show, handleClose }) => (
  <div
  style={{zIndex:'999'}}
    className={`absolute right-0 mt-8 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-999 ${show ? 'block' : 'hidden'}`}
    onClick={handleClose}
  >
    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
      <span className="font-semibold">You have 4 new notifications</span>
    </div>
    <div className="max-h-60 overflow-y-auto">
      <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={handleClose}>
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full">
            <FaUserPlus />
          </div>
          <div className="ml-3">
            <div className="font-medium">New user registered</div>
            <div className="text-sm text-gray-600">5 minutes ago</div>
          </div>
        </div>
        {/* <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full">
            <FaUserPlus />
          </div>
          <div className="ml-3">
            <div className="font-medium">New user registered</div>
            <div className="text-sm text-gray-600">5 minutes ago</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full">
            <FaUserPlus />
          </div> */}
          {/* <div className="ml-3">
            <div className="font-medium">New user registered</div>
            <div className="text-sm text-gray-600">5 minutes ago</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full">
            <FaUserPlus />
          </div>
          <div className="ml-3">
            <div className="font-medium">New user registered</div>
            <div className="text-sm text-gray-600">5 minutes ago</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full">
            <FaUserPlus />
          </div>
          <div className="ml-3">
            <div className="font-medium">New user registered</div>
            <div className="text-sm text-gray-600">5 minutes ago</div>
          </div> */}
        {/* </div> */}
      </a>
      {/* Add more notifications as needed */}
    </div>
    <a href="#" className="block px-4 py-2 text-blue-500 text-sm hover:bg-gray-100 flex items-center justify-between" onClick={handleClose}>
      See all notifications
      <FaAngleRight />
    </a>
  </div>
);

NotificationDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default NotificationDropdown;
