    import React, { useState } from 'react';
import { FaEllipsisV, FaSearch, FaBell, FaEnvelope, FaCog, FaUser } from 'react-icons/fa';
import MessageDropdown from './Responsive/MessageDropdown';
import NotificationDropdown from './Responsive/NotificationDropdown';
import QuickActionsDropdown from './Responsive/QuickActionsDropdown';
import UserDropdown from './Responsive/UserDropdown';


const MobileTest = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [quickActionsOpen, setQuickActionsOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    const toggleDropdown = (dropdownType) => {
        switch (dropdownType) {
            case 'message':
                setMessageOpen(!messageOpen);
                break;
            case 'notification':
                setNotificationOpen(!notificationOpen);
                break;
            case 'quickActions':
                setQuickActionsOpen(!quickActionsOpen);
                break;
            case 'user':
                setUserOpen(!userOpen);
                break;
            default:
                setMenuOpen(!menuOpen);
                break;
        }
    };

    return (
        <div className="relative">
            {/* Right side: Three dot icon */}
            <div className="relative ml-auto">
                <button onClick={() => toggleDropdown('menu')} className="text-gray-600">
                    <FaEllipsisV size={24} />
                </button>
                {/* Dropdown menu */}
                {menuOpen && (
                    <div className="absolute top-10 right-0 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                        <ul className="p-2">
                            <li
                                onClick={() => toggleDropdown('message')}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <FaSearch className="mr-2" />
                                <span>Search</span>
                            </li>
                            <li
                                onClick={() => toggleDropdown('notification')}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <FaBell className="mr-2" />
                                <span>Notifications</span>
                            </li>
                            <li
                                onClick={() => toggleDropdown('message')}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <FaEnvelope className="mr-2" />
                                <span>Messages</span>
                            </li>
                            <li
                                onClick={() => toggleDropdown('quickActions')}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <FaCog className="mr-2" />
                                <span>Quick Actions</span>
                            </li>
                            <li
                                onClick={() => toggleDropdown('user')}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <FaUser className="mr-2" />
                                <span>User Profile</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Dropdowns */}
            <MessageDropdown show={messageOpen} handleClose={() => setMessageOpen(false)} />
            <NotificationDropdown show={notificationOpen} handleClose={() => setNotificationOpen(false)} />
            <QuickActionsDropdown show={quickActionsOpen} handleClose={() => setQuickActionsOpen(false)} />
            <UserDropdown    show={userOpen} handleClose={() => setUserOpen(false)} />
        </div>
    );
};

export default MobileTest;
