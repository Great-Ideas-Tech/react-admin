import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaLayerGroup, FaThList, FaPenSquare, FaTable, FaMap,FaTh , FaChartBar,FaFileAlt , FaCaretDown, FaThLarge,  } from 'react-icons/fa';

const Mobilesidebar = ({ isOpen, closeSidebar }) => {
  const [dashIsOpen, setDashIsOpen] = React.useState(false);
  const [baseIsOpen, setBaseIsOpen] = React.useState(false);
  const [layoutIsOpen, setLayoutIsOpen] = React.useState(false);
  const [formIsOpen, setFormIsOpen] = React.useState(false);
  const [tableIsOpen, setTableIsOpen] = React.useState(false);
  const [mapIsOpen, setMapIsOpen] = React.useState(false);
  const [chartIsOpen, setChartIsOpen] = React.useState(false);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

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
    <div style={{background: 'var(--header-logo-bg)'}} ref={sidebarRef} className={`fixed top-0 left-0 bg-gray-800  md:hidden text-white text-sm w-[250px] h-full transition-transform duration-300 z-[998] overflow-y-auto pt-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div >
        <Link to=''>
        <h1 className='text-2xl ml-8 font-semibold font-serif text-white' >GREAT Idea :)</h1>

        </Link>
      </div>
      <div className="px-4">
        <ul className="space-y-4">
          {/* Dashboard */}
          <li>
            <Link to='/'
              onClick={() => setDashIsOpen(!dashIsOpen)}
              className="flex items-center text-white text-sm cursor-pointer"
            >
              <FaHome className='text-gray-500 hover:text-purple-800 text-lg ' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Dashboard</p>
              <FaCaretDown className="ml-3" />
            </Link>
            {dashIsOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li>
                  <a href="../demo1/index.html" className="text-white text-sm">
                    Dashboard 1
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Components Section */}
          <li>
            <h4 className="text-lg text-gray-300 text-left">Components</h4>
          </li>

          {/* Base */}
          <li>
            <button
              onClick={() => setBaseIsOpen(!baseIsOpen)}
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaLayerGroup className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Base</p>
              <FaCaretDown className="ml-3" />
            </button>
            {baseIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-3">
                <li><Link to="/avatar" className="text-white text-sm" onClick={closeSidebar}>Avatars</Link></li>
                <li><Link to="/button" className="text-white text-sm" onClick={closeSidebar}>Buttons</Link></li>
                <li><Link to="/grid" className="text-white text-sm" onClick={closeSidebar}>Grid System</Link></li>
                <li><Link to="/panel" className="text-white text-sm" onClick={closeSidebar}>Panels</Link></li>
                <li><Link to="/notification" className="text-white text-sm" onClick={closeSidebar}>Notifications</Link></li>
                <li><Link to="/sweet" className="text-white text-sm" onClick={closeSidebar}>Sweet Alert</Link></li>
                <li><Link to="/font" className="text-white text-sm" onClick={closeSidebar}>Font Awesome Icons</Link></li>
                <li><Link to="/icon" className="text-white text-sm" onClick={closeSidebar}>Simple Line Icons</Link></li>
                <li><Link to="/typo" className="text-white text-sm" onClick={closeSidebar}>Typography</Link></li>
              </ul>
            )}
          </li>

          {/* Sidebar Layouts */}
          <li>
            <button
              onClick={() => setLayoutIsOpen(!layoutIsOpen)}
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaThList className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Sidebar Layouts</p>
              <FaCaretDown className="ml-3" />
            </button>
            {layoutIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-3">
                <li><Link to='/sidebar' className="text-white text-sm" onClick={closeSidebar}>Sidebar Style 2</Link></li>
                <li><Link to='/sidebar' className="text-white text-sm" onClick={closeSidebar}>Icon Menu</Link></li>
              </ul>
            )}
          </li>

          {/* Forms */}
          <li>
            <button
              onClick={() => setFormIsOpen(!formIsOpen)}
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaPenSquare className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Forms</p>
              <FaCaretDown className="ml-3" />
            </button>
            {formIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-3">
                <li><Link to="../form" className="text-white text-sm" onClick={closeSidebar}>Basic Form</Link></li>
              </ul>
            )}
          </li>

          {/* Tables */}
          <li>
            <button
              onClick={() => setTableIsOpen(!tableIsOpen)}
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaTable className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Tables</p>
              <FaCaretDown className="ml-3" />
            </button>
            {tableIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-3">
                <li><Link to='/basic' className="text-white text-sm" onClick={closeSidebar}>Basic Tables</Link></li>
                <li><Link to="../data" className="text-white text-sm" onClick={closeSidebar}>Data Tables</Link></li>
              </ul>
            )}
          </li>

          {/* Maps */}
          <li>
            <button
              onClick={() => setMapIsOpen(!mapIsOpen)}
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaMap className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Maps</p>
              <FaCaretDown className="ml-3" />
            </button>
            {mapIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-3">
                <li><Link to="/google" className="text-white text-sm" onClick={closeSidebar}>Google Maps</Link></li>
                <li><Link to="/vector" className="text-white text-sm" onClick={closeSidebar}>Jsvectormaps</Link></li>
              </ul>
            )}
          </li>

          {/* Charts */}
          <li>
            <button
              onClick={() => setChartIsOpen(!chartIsOpen)}
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaChartBar className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Charts</p>
              <FaCaretDown className="ml-3" />
            </button>
            {chartIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-3">
                <li><Link to="/chart" className="text-white text-sm" onClick={closeSidebar}>Chartjs</Link></li>
                <li><Link to="/spark" className="text-white text-sm" onClick={closeSidebar}>Spark line</Link></li>
               
              </ul>
            )}
          </li>
          <li>
          <Link to='/widget' onClick={closeSidebar}>
          <button
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaTh className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Widgets</p>
              <span className="badge badge-success">4</span>
            </button>
          </Link>
          </li>
          <li>
          <button
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaFileAlt  className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 text-sm">Documentation</p>
              <span className="badge badge-secondary">1</span>                                                       
                </button>
          </li>

          {/* Menu Levels */}
          <li>
            <button
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="flex items-center text-white text-sm w-full text-left"
            >
              <FaThLarge className='text-gray-500 hover:text-purple-800 text-lg' />
              <p className="ml-2 mt-3 hover:text-gray-500 text-sm">Menu Levels</p>
              <FaCaretDown className="ml-3" />
            </button>
            {menuIsOpen && (
              <ul className="pl-8 mt-2 space-y-2 flex flex-col gap-3">
                <li><Link to='/level1' className="text-white text-sm" onClick={closeSidebar}>Level 1</Link></li>
                <li><Link to='/level2' className="text-white text-sm" onClick={closeSidebar}>Level 2</Link></li>
                <li><Link to='/level3' className="text-white text-sm" onClick={closeSidebar}>Level 3</Link></li>
              </ul>
            )}
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Mobilesidebar;
