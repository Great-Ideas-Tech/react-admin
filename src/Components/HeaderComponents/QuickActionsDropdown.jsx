import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendarAlt, FaMap, FaFileAlt, FaEnvelope, FaFileInvoice, FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QuickActionsDropdown = ({ show, handleClose }) => (
  <div
    style={{ zIndex: '999' }}
    className={`absolute right-0 mx-8 mt-7 w-80 bg-white border rounded-b-lg border-gray-300 rounded-lg shadow-lg transition-all duration-300 transform ${
      show ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}
    onClick={handleClose}
  >
    <div className="p-4 bg-blue-600 rounded-t-lg">
      <span className="text-white font-semibold text-lg">Quick Actions</span>
      <span className="block text-sm text-blue-200">Shortcuts</span>
    </div>
    <div className="quick-actions-grid grid grid-cols-3 gap-4 p-4 bg-white">
      {[
        { icon: <FaCalendarAlt />, label: 'Calendar', bg: 'bg-red-500' },
        { icon: <FaMap />, label: 'Maps', bg: 'bg-orange-500' },
        { icon: <FaFileAlt />, label: 'Reports', bg: 'bg-blue-500' },
        { icon: <FaEnvelope />, label: 'Emails', bg: 'bg-green-500' },
        { icon: <FaFileInvoice />, label: 'Invoice', bg: 'bg-indigo-500' },
        { icon: <FaCreditCard />, label: 'Payments', bg: 'bg-purple-500' }
      ].map(({ icon, label, bg }) => (
        <Link to="#" key={label} className="flex flex-col items-center text-center" onClick={handleClose}>
          <div className={`${bg} text-white p-4 rounded-full hover:bg-opacity-90`}>
            {icon}
          </div>
          <span className="mt-2 text-sm text-gray-800">{label}</span>
        </Link>
      ))}
    </div>
  </div>
);

QuickActionsDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default QuickActionsDropdown;
