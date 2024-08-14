import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <Link to="/" className="mt-8 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
