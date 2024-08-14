import React from 'react';
import { FaCalendarAlt, FaMapMarkedAlt, FaChartLine, FaEnvelope, FaFileInvoice, FaDollarSign } from 'react-icons/fa';

const QuickActions = () => {
  const actions = [
    { id: 1, name: 'Calendar', icon: <FaCalendarAlt className="text-yellow-500" />, description: 'Manage your schedule' },
    { id: 2, name: 'Maps', icon: <FaMapMarkedAlt className="text-blue-500" />, description: 'View and explore maps' },
    { id: 3, name: 'Reports', icon: <FaChartLine className="text-green-500" />, description: 'Generate and view reports' },
    { id: 4, name: 'Emails', icon: <FaEnvelope className="text-purple-500" />, description: 'Check and manage emails' },
    { id: 5, name: 'Invoice', icon: <FaFileInvoice className="text-red-500" />, description: 'Create and manage invoices' },
    { id: 6, name: 'Payments', icon: <FaDollarSign className="text-orange-500" />, description: 'Process and track payments' },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto md:hidden bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {actions.map((action) => (
          <div key={action.id} className="p-4 border border-gray-200 rounded-lg flex items-center space-x-4 shadow-sm hover:bg-gray-100 transition-colors duration-200 ease-in-out">
            <div className="text-3xl">
              {action.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{action.name}</h3>
              <p className="text-gray-600">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
