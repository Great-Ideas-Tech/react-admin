import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendarAlt, FaMap, FaFileAlt, FaEnvelope, FaFileInvoice, FaCreditCard } from 'react-icons/fa';

const QuickActionsDropdown = ({ show, handleClose }) => (
  <div
  style={{zIndex:'999'}}
    className={`absolute right-0 mx-8 w-80 mb-10 min-h-screen bg-white border border-gray-300 rounded-lg shadow-lg ${show ? 'block' : 'hidden'}`}
    onClick={handleClose}
  >
    <div className="p-4 bg-blue-600 rounded-t-lg">
      <span className="text-white font-semibold">Quick Actions</span>
      <span className="block text-sm text-blue-200">Shortcuts</span>
    </div>
    <div className="quick-actions-grid grid grid-cols-3 gap-4 p-4 bg-white">
      <a href="#" className="flex flex-col items-center text-center" onClick={handleClose}>
        <div className="bg-red-500 text-white p-4 rounded-full">
          <FaCalendarAlt />
        </div>
        <span className="mt-2 text-sm text-gray-800">Calendar</span>
      </a>
      <a href="#" className="flex flex-col items-center text-center" onClick={handleClose}>
        <div className="bg-orange-500 text-white p-4 rounded-full">
          <FaMap />
        </div>
        <span className="mt-2 text-sm text-gray-800">Maps</span>
      </a>
      <a href="#" className="flex flex-col items-center text-center" onClick={handleClose}>
        <div className="bg-blue-500 text-white p-4 rounded-full">
          <FaFileAlt />
        </div>
        <span className="mt-2 text-sm text-gray-800">Reports</span>
      </a>
      <a href="#" className="flex flex-col items-center text-center" onClick={handleClose}>
        <div className="bg-green-500 text-white p-4 rounded-full">
          <FaEnvelope />
        </div>
        <span className="mt-2 text-sm text-gray-800">Emails</span>
      </a>
      <a href="#" className="flex flex-col items-center text-center" onClick={handleClose}>
        <div className="bg-indigo-500 text-white p-4 rounded-full">
          <FaFileInvoice />
        </div>
        <span className="mt-2 text-sm text-gray-800">Invoice</span>
      </a>
      <a href="#" className="flex flex-col items-center text-center" onClick={handleClose}>
        <div className="bg-purple-500 text-white p-4 rounded-full">
          <FaCreditCard />
        </div>
        <span className="mt-2 text-sm text-gray-800">Payments</span>
      </a>
    </div>
  </div>
);

QuickActionsDropdown.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default QuickActionsDropdown;
