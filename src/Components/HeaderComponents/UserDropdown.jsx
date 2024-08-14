import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserDropdown = ({ show, handleClose }) => (
  <div
    style={{ zIndex: '999' }}
    className={`absolute right-0 mt-6 w-72 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-200 ease-in-out ${
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}
    onClick={handleClose}
  >
    <div>
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
          <Link to='*'
          
            className="mt-2 h-10 flex items-center justify-center w-24 bg-blue-500 text-white text-xs py-1 px-3 rounded hover:bg-blue-600"
            onClick={handleClose}
          >
            View Profile
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-200">
        {[
          { label: 'My Profile', href: '#' },
          { label: 'My Balance', href: '#' },
          { label: 'Inbox', href: '#' },
          { label: 'Account Setting', href: '#' },
          { label: 'Logout', href: '#' }
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={handleClose}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

UserDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default UserDropdown;
