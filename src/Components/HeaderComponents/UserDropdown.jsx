  import React from 'react';
  import PropTypes from 'prop-types';

  const UserDropdown = ({ show, handleClose }) => (
    <div style={{zIndex:'999'}} className={`absolute right-0 mt-6 w-72 bg-white border border-gray-300 z-999 rounded-lg shadow-lg ${show ? 'block' : 'hidden'} transition-all duration-200 ease-in-out`}>
      <div className="">
        <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
          <div className="w-12 h-12">
            <img
              src="/user.jpg"
              alt="User Profile"
              className="w-full h-full rounded-full object-cover border"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Hizrian</h4>
            <p className="text-sm text-gray-500">hello@example.com</p>
            <a
              href="profile.html"
              className="mt-2 h-10 flex items-center w-24  bg-blue-500 text-white text-xs py-1 px-3 rounded hover:bg-gray-300"
              onClick={handleClose}
            >
              View Profile
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleClose}>My Profile</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleClose}>My Balance</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleClose}>Inbox</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleClose}>Account Setting</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={handleClose}>Logout</a>
        </div>
      </div>
    </div>
  );

  UserDropdown.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
  };

  export default UserDropdown;
