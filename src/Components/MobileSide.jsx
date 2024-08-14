import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHome, FaLayerGroup, FaThList, FaPenSquare, FaTable, FaMap, 
  FaChartBar, FaFileAlt, FaCaretDown, FaThLarge, FaTh 
} from 'react-icons/fa';

const Mobilesidebar = ({ isOpen, closeSidebar }) => {
  const [dashIsOpen, setDashIsOpen] = useState(false);
  const [baseIsOpen, setBaseIsOpen] = useState(false);
  const [layoutIsOpen, setLayoutIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [tableIsOpen, setTableIsOpen] = useState(false);
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [chartIsOpen, setChartIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <div 
      style={{ background: 'var(--header-logo-bg)' }} 
      ref={sidebarRef} 
      className={`fixed top-0 left-0 bg-gray-800 md:hidden text-white text-sm w-[250px] h-full transition-transform duration-300 z-[998] overflow-y-auto pt-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'} smooth-scroll`}
    >
      <div className="px-4 mb-6">
        <Link to=''>
          <h1 className='text-2xl font-semibold font-serif text-white'>
            GREAT Idea :)
          </h1>
        </Link>
      </div>
      
      <ul className="space-y-4">
        {/* Dashboard */}
        <li>
          <Link 
            to='/'
            onClick={() => setDashIsOpen(!dashIsOpen)}
            className="flex items-center text-white text-sm cursor-pointer hover:bg-gray-700 p-2 rounded transition-colors"
          >
            <FaHome className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="text-sm ml-6 flex-grow font-semibold transition-colors hover:text-gray-400">Dashboard</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${dashIsOpen ? 'rotate-180' : ''}`} />
          </Link>
          <div className={`menu-content ${dashIsOpen ? 'open' : ''}`}>
            {dashIsOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li className='ml-8'>
                  <a href="../demo1/index.html" className="text-white font-semibold text-sm">Dashboard 1</a>
                </li>
              </ul>
            )}
          </div>
        </li>

        {/* Components Section */}
        <li>
          <h4 className="text-lg font-semibold text-gray-300">Components</h4>
        </li>

        {/* Base */}
        <li>
          <button
            onClick={() => setBaseIsOpen(!baseIsOpen)}
            className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors"
          >
            <FaLayerGroup className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="text-sm flex-grow font-semibold ml-6 transition-colors hover:text-gray-400">Base</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${baseIsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`menu-content ${baseIsOpen ? 'open' : ''}`}>
            {baseIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 ml-8 gap-4 flex flex-col mb-3">
                <li><Link to="/avatar" className="text-white font-semibold text-sm" onClick={closeSidebar}>Avatars</Link></li>
                <li><Link to="/button" className="text-white font-semibold text-sm" onClick={closeSidebar}>Buttons</Link></li>
                <li><Link to="/grid" className="text-white font-semibold text-sm" onClick={closeSidebar}>Grid System</Link></li>
                <li><Link to="/panel" className="text-white font-semibold text-sm" onClick={closeSidebar}>Panels</Link></li>
                <li><Link to="/notification" className="text-white font-semibold text-sm" onClick={closeSidebar}>Notifications</Link></li>
                <li><Link to="/sweet" className="text-white font-semibold text-sm" onClick={closeSidebar}>Sweet Alert</Link></li>
                <li><Link to="/font" className="text-white font-semibold text-sm" onClick={closeSidebar}>Font Awesome Icons</Link></li>
                <li><Link to="/icon" className="text-white font-semibold text-sm" onClick={closeSidebar}>Simple Line Icons</Link></li>
                <li><Link to="/typo" className="text-white font-semibold text-sm" onClick={closeSidebar}>Typography</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Sidebar Layouts */}
        <li>
          <button
            onClick={() => setLayoutIsOpen(!layoutIsOpen)}
            className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors"
          >
            <FaThList className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Sidebar Layouts</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${layoutIsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`menu-content ${layoutIsOpen ? 'open' : ''}`}>
            {layoutIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-4 mb-3 ml-8">
                <li><Link to='/sidebar' className="text-white font-semibold text-sm" onClick={closeSidebar}>Sidebar Style 2</Link></li>
                <li><Link to='/sidebar' className="text-white font-semibold text-sm" onClick={closeSidebar}>Icon Menu</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Forms */}
        <li>
          <button
            onClick={() => setFormIsOpen(!formIsOpen)}
            className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors"
          >
            <FaPenSquare className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Forms</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${formIsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`menu-content ${formIsOpen ? 'open' : ''}`}>
            {formIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex gap-4 ml-8 mb-3">
                <li><Link to="../form" className="text-white font-semibold text-sm" onClick={closeSidebar}>Basic Form</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Tables */}
        <li>
          <button
            onClick={() => setTableIsOpen(!tableIsOpen)}
            className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors"
          >
            <FaTable className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Tables</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${tableIsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`menu-content ${tableIsOpen ? 'open' : ''}`}>
            {tableIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-4 mb-3 ml-8">
                <li><Link to="/basic" className="text-white font-semibold text-sm" onClick={closeSidebar}>Basic Tables</Link></li>
                <li><Link to="/data" className="text-white font-semibold text-sm" onClick={closeSidebar}>Data Tables</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Maps */}
        <li>
          <button
            onClick={() => setMapIsOpen(!mapIsOpen)}
            className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors"
          >
            <FaMap className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Maps</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${mapIsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`menu-content ${mapIsOpen ? 'open' : ''}`}>
            {mapIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-4 mb-3 ml-8">
                <li><Link to="/google" className="text-white font-semibold text-sm" onClick={closeSidebar}>Google Maps</Link></li>
                <li><Link to="/vector" className="text-white font-semibold text-sm" onClick={closeSidebar}>Jsvectormaps</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Charts */}
        <li>
          <button
            onClick={() => setChartIsOpen(!chartIsOpen)}
            className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors"
          >
            <FaChartBar className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Charts</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${chartIsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`menu-content ${chartIsOpen ? 'open' : ''}`}>
            {chartIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-4 mb-3 ml-8">
                <li><Link to="/chart" className="text-white font-semibold text-sm" onClick={closeSidebar}>Chartjs</Link></li>
                <li><Link to="/spark" className="text-white font-semibold text-sm" onClick={closeSidebar}>Spark line</Link></li>
              </ul>
            )}
          </div>
        </li>

        {/* Widgets */}
        <li>
          <Link to='/widget' onClick={closeSidebar}>
            <button className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors">
              <FaTh className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
              <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Widgets</p>
              <span className="badge badge-success mb-3">4</span>
            </button>
          </Link>
        </li>

        {/* Documentation */}
        <li>
          <button className="flex items-center text-white text-sm w-full text-left hover:bg-gray-700 p-2 rounded transition-colors">
            <FaFileAlt className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Documentation</p>
            <span className="badge badge-success mb-3">1</span>
          </button>
        </li>

        {/* Menu Levels */}
        <li>
          <button
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            className="flex items-center text-white text-sm w-full text-left hover:text-gray-400 p-2 rounded transition-colors"
          >
            <FaThLarge className='text-white mb-3 transition-colors hover:text-purple-800 text-lg' />
            <p className="ml-6 text-sm font-semibold transition-colors hover:text-gray-400 flex-grow">Menu Levels</p>
            <FaCaretDown className={`ml-auto mb-3 transition-transform ${menuIsOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`menu-content ${menuIsOpen ? 'open' : ''}`}>
            {menuIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-4 mb-3 ml-8">
                <li><Link to='/level1' className="text-white font-semibold text-sm" onClick={closeSidebar}>Level 1</Link></li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Mobilesidebar;
