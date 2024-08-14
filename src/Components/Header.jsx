import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaEnvelope, FaBell, FaLayerGroup, FaUserCircle, FaEllipsisV, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MessageDropdown from './HeaderComponents/MessageDropdown'; // Adjust the path as necessary
import NotificationDropdown from './HeaderComponents/NotificationDropdown'; // Adjust the path as necessary
import QuickActionsDropdown from './HeaderComponents/QuickActionsDropdown'; // Adjust the path as necessary
import UserDropdown from './HeaderComponents/UserDropdown'; // Adjust the path as necessary

const Header = ({ toggleSidebar }) => {
  const [messageDropdownOpen, setMessageDropdownOpen] = useState(false);
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [quickActionsDropdownOpen, setQuickActionsDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  
  const headerRef = useRef(null);

  const closeAllDropdowns = () => {
    setMessageDropdownOpen(false);
    setNotificationDropdownOpen(false);
    setQuickActionsDropdownOpen(false);
    setUserDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const handleDropdownToggle = (dropdown, setDropdown) => {
    if (dropdown) {
      setDropdown(false);
    } else {
      closeAllDropdowns();
      setDropdown(true);
    }
  };

  const handleMobileDropdownToggle = () => {
    setMobileDropdownOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    closeAllDropdowns();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} style={{background:'var(--navbar-bg)'}} className="md:bg-white  shadow-sm py-3 px-6 flex justify-between items-center">
      <div className='md:hidden '>
        <Link to='/'>
         <h1 className='text-xl font-bold font-serif text-white flex items-center justify-center '>GREAT Idea :)</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center md:m-auto ml-4">
          <FaSearch className="absolute top-3 left-3 text-gray-500 md:mt-1" />
          <input
            type="text"
            placeholder="Search ..."
            className="pl-10 pr-4 py-2 md:w-72 md:h-12 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-400 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6 items-center">
          <div className="relative">
            <FaEnvelope
              className="text-white text-xl hover:scale-110 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => handleDropdownToggle(messageDropdownOpen, setMessageDropdownOpen)}
            />
            <MessageDropdown show={messageDropdownOpen} handleClose={handleLinkClick} />
          </div>
          <div className="relative">
            <FaBell
              className="text-white text-xl hover:scale-110 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => handleDropdownToggle(notificationDropdownOpen, setNotificationDropdownOpen)}
            />
            <NotificationDropdown show={notificationDropdownOpen} handleClose={handleLinkClick} />
            <span className="absolute -top-1 -right-2 bg-green-500 text-white  text-xs rounded-full w-4 h-4 flex items-center justify-center">4</span>
          </div>
          <div className="relative">  
            <FaLayerGroup
              className="text-white text-xl hover:scale-110 cursor-pointer transition-colors duration-200 ease-in-out"
              onClick={() => handleDropdownToggle(quickActionsDropdownOpen, setQuickActionsDropdownOpen)}
            />
            <QuickActionsDropdown show={quickActionsDropdownOpen} handleClose={handleLinkClick} />
          </div>
          <div className="relative">
            <div
              className="flex items-center text-xl space-x-2 cursor-pointer hover:scale-110  transition-colors duration-200 ease-in-out p-2 rounded"
              onClick={() => handleDropdownToggle(userDropdownOpen, setUserDropdownOpen)}
            >
              <FaUserCircle className="text-white text-3xl  " />
              <span className="font-medium text-sm text-white">Hizrian</span>
            </div>
            <UserDropdown show={userDropdownOpen} handleClose={handleLinkClick} />
          </div>
        </div>

        <div className="md:hidden relative">
          <FaEllipsisV
            className="text-white text-2xl hover:text-blue-500 cursor-pointer transition-colors duration-200 ease-in-out"
            onClick={handleMobileDropdownToggle}
          />
          {mobileDropdownOpen && (
            <div className="absolute right-0 mt-7 mb-7 py-2 w-48 bg-white border rounded-lg shadow-lg z-50 transform transition-transform duration-200 ease-in-out scale-100">
              <Link to="/mess" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200 ease-in-out" onClick={handleLinkClick}>
                <FaEnvelope className="inline-block mr-2" /> Messages
              </Link>
              <Link to="/noti" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200 ease-in-out" onClick={handleLinkClick}>
                <FaBell className="inline-block mr-2" /> Notifications
              </Link>
              <Link to="/quick" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200 ease-in-out" onClick={handleLinkClick}>
                <FaLayerGroup className="inline-block mr-2" /> Quick Actions
              </Link>
              <Link to="/user" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition-colors duration-200 ease-in-out" onClick={handleLinkClick}>
                <FaUserCircle className="inline-block mr-2" /> Profile
              </Link>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <FaBars
            className="text-white text-2xl hover:text-blue-500 cursor-pointer transition-colors duration-200 ease-in-out"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
