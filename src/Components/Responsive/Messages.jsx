import React, { useState, useEffect } from 'react';
import messagesData from '../../../public/message.json'; // Importing the JSON data

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(messagesData);
  }, []);

  const handleMarkAllAsRead = () => {
    // Logic to mark all as read can be added here
    alert('All messages marked as read!');
  };

  return (
    <div className="p-6 max-w-md mx-auto mb-10 bg-white shadow-md rounded-lg md:hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Messages</h2>
        <button
          onClick={handleMarkAllAsRead}
          className="text-blue-500 hover:underline"
        >
          Mark All as Read
        </button>
      </div>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{msg.sender}</h3>
              <span className="text-gray-500 text-sm">{msg.timestamp}</span>
            </div>
            <p className="text-gray-700">{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          See All Messages
        </button>
      </div>
    </div>
  );
};

export default Messages;
