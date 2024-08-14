import React, { useState, useEffect } from 'react';
import notificationsData from '../../../public/notifications.json'; // Importing the JSON data

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(notificationsData);
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md md:hidden rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Notifications</h2>
          <p className="text-gray-500 text-sm">
            {notifications.length} {notifications.length === 1 ? 'notification' : 'notifications'}
          </p>
        </div>
        <button className="text-blue-500 hover:underline">
          See All Notifications
        </button>
      </div>
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className="p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{notif.title}</h3>
              <span className="text-gray-500 text-sm">{notif.timestamp}</span>
            </div>
            <p className="text-gray-700">{notif.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
