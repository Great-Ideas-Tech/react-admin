import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const [dashIsOpen, setDashIsOpen] = useState(false);
    const [baseIsOpen, setBaseIsOpen] = useState(false);
    const [layoutIsOpen, setLayoutIsOpen] = useState(false);
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [tableIsOpen, settableIsOpen] = useState(false);
    const [mapIsOpen, setMapIsOpen] = useState(false);
    const [chartIsOpen, setChartIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (

        <div className="sidebar" style={{ background: '', color: '#fff' }}>
        <div className="sidebar-logo">
            {/* Logo Header */}
            <div className="logo-header" style={{ padding: '10px', textAlign: 'center',background: 'var(--header-logo-bg)' }}>
                <a href="index.html" className="logo">
                   <h1 className="font-bold text-3xl font-serif text-white ml-3">GREAT Idea :)</h1>
                </a>
            
               
                <button className="topbar-toggler more">
                    <i className="gg-more-vertical-alt" />
                </button>
            </div>
            
            {/* End Logo Header */}
        </div>
        
   
    
            <div className="sidebar-wrapper overflow-auto scrollbar" style={{background: 'var(--sidebar-bg)'}}>
                <div className="sidebar-content">
                    <ul className="nav nav-secondary">
                        <li className="nav-item">
                            <Link to='/' className="text-white hover:text-white"
                                onClick={() => setDashIsOpen(!dashIsOpen)}
                                style={{
                                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                                    padding: '10px', color: '#fff'
                                }}
                            >
                                <i className="fas fa-home" />
                                <p style={{ marginLeft: '10px' }} className="">Dashboard</p>
                            </Link>
                            <div style={{
                                display: dashIsOpen ? 'block' : 'none',
                                paddingLeft: '20px'
                            }}>
                                <ul>
                                    <li>
                                        <a href="../demo1/index.html" style={{ color: '#fff' }}>
                                            Dashboard 1</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h" />
                            </span>
                            <h4 className="text-section">Components</h4>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => setBaseIsOpen(!baseIsOpen)}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px', color: '#fff', transitionDuration:' 0.5s' }}
                            >
                                <i className="fas fa-layer-group" />
                                <p style={{ marginLeft: '10px' }}>Base</p>
                                <span className="caret"></span>
                            </a>
                            <div style={{ display: baseIsOpen ? 'block' : 'none', paddingLeft: '20px' }}>
                                <ul>
                                    <li>
                                        <Link to="/avatar" style={{ color: '#fff' }}>
                                            Avatars
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/button" style={{ color: '#fff' }}>
                                            Buttons
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/grid" style={{ color: '#fff' }}>
                                            Grid System
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/panel" style={{ color: '#fff' }}>
                                            Panels
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/notification" style={{ color: '#fff' }}>
                                            Notifications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sweet" style={{ color: '#fff' }}>
                                            Sweet Alert
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/font" style={{ color: '#fff' }}>
                                            Font Awesome Icons
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/icon" style={{ color: '#fff' }}>
                                            Simple Line Icons
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/typo" style={{ color: '#fff' }}>
                                            Typography
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a
                                onClick={() => setLayoutIsOpen(!layoutIsOpen)}
                                style={{
                                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                                    padding: '10px', color: '#fff', textDecoration: 'none'
                                }}
                            >
                                <i className="fas fa-th-list" />
                                <p style={{ marginLeft: '10px' }}>Sidebar Layouts</p>
                                <span className="caret" style={{ marginLeft: 'auto' }} />
                            </a>
                            <div style={{ display: layoutIsOpen ? 'block' : 'none', paddingLeft: '20px' }}>
                                <ul>
                                    <li>
                                        <Link to='/sidebar' style={{ textDecoration: 'none', color: '#fff' }}>
                                            <span className="sub-item">Sidebar Style 2</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/sidebar' style={{ textDecoration: 'none', color: '#fff' }}>
                                            <span className="sub-item">Icon Menu</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a
                                onClick={() => setFormIsOpen(!formIsOpen)}
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    color: '#fff'
                                }}
                            >
                                <i className="fas fa-pen-square" />
                                <p style={{ marginLeft: '10px' }}>Forms</p>
                                <span className="caret" style={{ marginLeft: 'auto' }} />
                            </a>
                            <div
                                style={{
                                    display: formIsOpen ? 'block' : 'none',
                                    paddingLeft: '20px'
                                }}
                            >
                                <ul>
                                    <li>
                                        <Link to="../form" style={{ color: '#fff' }}>
                                            Basic Form
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a
                                onClick={() => settableIsOpen(!tableIsOpen)}
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    color: '#fff',
                                    textDecoration: 'none', // Optional, to remove underline if any
                                    borderRadius: '4px', // Optional, for rounded corners
                                    // backgroundColor: tableIsOpen ? '#333' : 'transparent' // Optional, highlight on open
                                }}
                            >
                                <i className="fas fa-table" />
                                <p style={{ marginLeft: '10px' }}>Tables</p>
                                <span className="caret" 
                                // style={{ marginLeft: 'auto', transform: tableIsOpen ? '' : '', transition: '' 
                                    
                                // }}
                                 />
                            </a>
                            <div style={{
                                display: tableIsOpen ? 'block' : 'none',
                                paddingLeft: '20px'
                            }}>
                                <ul>
                                    <li>
                                        <Link to='/basic' style={{ color: '#fff', textDecoration: 'none' }}>
                                            <span className="sub-item">Basic Table</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/data' style={{ color: '#fff', textDecoration: 'none' }}>
                                            <span className="sub-item">Datatables</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a
                                onClick={() => setMapIsOpen(!mapIsOpen)}
                                style={{
                                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                                    padding: '10px', color: '#fff'
                                }}
                            >
                                <i className="fas fa-map-marker-alt" />
                                <p style={{ marginLeft: '10px' }}>Maps</p>
                                <span className="caret" />
                            </a>
                            <div style={{ display: mapIsOpen ? 'block' : 'none', paddingLeft: '20px' }}>
                                <ul>
                                    <li>
                                        <Link to='/google'>
                                            <span style={{ color: '#fff' }}>Google Maps</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/vector'>
                                            <span style={{ color: '#fff' }}>Jsvectormap</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                data-bs-toggle="collapse"
                                href="#charts"
                                onClick={() => setChartIsOpen(!chartIsOpen)}
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    color: '#fff',
                                    textDecoration: 'none'
                                }}
                            >
                                <i className="far fa-chart-bar" />
                                <p style={{ marginLeft: '10px' }}>Charts</p>
                                <span className="caret" style={{ marginLeft: 'auto' }} />
                            </a>
                            <div style={{
                                display: chartIsOpen ? 'block' : 'none',
                                paddingLeft: '20px'
                            }} id="charts">
                                <ul>
                                    <li>
                                        <Link to="/chart" style={{ color: '#fff', textDecoration: 'none' }}>
                                            <span className="sub-item">Chart Js</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/spark" style={{ color: '#fff', textDecoration: 'none' }}>
                                            <span className="sub-item">Sparkline</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link to='/widget'>
                                <i className="fas fa-desktop" />
                                <p>Widgets</p>
                                <span className="badge badge-success">4</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/document'>
                                <i className="fas fa-file" />
                                <p>Documentation</p>
                                
                                <span className="badge badge-secondary">1</span>
                                
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => setMenuIsOpen(!menuIsOpen)}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px', color: '#fff' }}
                            >
                                <i className="fas fa-bars" />
                                <p style={{ marginLeft: '10px' }}>Menu Levels</p>
                                <span style={{ marginLeft: 'auto' }} className="caret" />
                            </a>
                            <div style={{ display: menuIsOpen ? 'block' : 'none', paddingLeft: '20px' }}>
                                <ul style={{ paddingLeft: '0' }}>
                                    <li>
                                        <a
                                            onClick={() => setMenuIsOpen(!subMenuIsOpen)}
                                            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px', color: '#fff' }}
                                        >
                                            <span style={{ marginLeft: '10px' }}>Level 1</span>
                                            <span style={{ marginLeft: 'auto' }} className="caret" />
                                        </a>
                                        <div style={{ display: menuIsOpen ? 'block' : 'none', paddingLeft: '20px' }}>
                                            <ul style={{ paddingLeft: '0' }}>
                                                {/* Sub-menu items can be added here */}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
