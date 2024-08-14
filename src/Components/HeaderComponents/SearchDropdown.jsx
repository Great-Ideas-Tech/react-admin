import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchDropdown = ({ show, handleClose }) => (
  <div
    className={`absolute top-16 right-4 w-64 bg-white shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 ${show ? 'block' : 'hidden'}`}
    style={{ zIndex: 999 }}
  >
    <form className="p-4">
      <div className="flex items-center border border-gray-300 rounded-md">
        <input
          type="text"
          placeholder="Search ..."
          className="form-control px-4 py-2 rounded-md border-none focus:ring-0"
        />
        <button type="submit" className="p-2">
          <FaSearch className="text-gray-500" />
        </button>
      </div>
    </form>
  </div>
);

export default SearchDropdown;
