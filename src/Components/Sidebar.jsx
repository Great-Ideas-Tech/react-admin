import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [dashIsOpen, setDashIsOpen] = useState(false);
    const [baseIsOpen, setBaseIsOpen] = useState(false);
    const [layoutIsOpen, setLayoutIsOpen] = useState(false);
    const [formIsOpen, setFormIsOpen] = useState(false);
    const [tableIsOpen, setTableIsOpen] = useState(false);
    const [mapIsOpen, setMapIsOpen] = useState(false);
    const [chartIsOpen, setChartIsOpen] = useState(false);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div className="sidebar" style={{ color: '#fff' }}>
            <div className="sidebar-logo">
                {/* Logo Header */}
                <div className="logo-header" style={{ padding: '10px', textAlign: 'center', background: 'var(--header-logo-bg)' }}>
                    <Link to="/" className="logo">
                        <h1 className="font-bold text-3xl font-serif text-white">GREAT Idea :)</h1>
                    </Link>
                    <button className="topbar-toggler more">
                        <i className="gg-more-vertical-alt text-white" />
                    </button>
                </div>
            </div>

            <div className="sidebar-wrapper overflow-auto scrollbar" style={{ background: 'var(--sidebar-bg)' }}>
                <div className="sidebar-content">
                    <ul className="nav nav-secondary">
                        <SidebarItem
                            title="Dashboard"
                            iconClass="fas fa-home"
                            isOpen={dashIsOpen}
                            onClick={() => setDashIsOpen(!dashIsOpen)}
                        >
                            <ul>
                                <li>
                                    <Link to="*" className="text-white">
                                        Dashboard 1
                                    </Link>
                                </li>
                            </ul>
                        </SidebarItem>

                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h text-white" />
                            </span>
                            <h4 className="text-section text-white">Components</h4>
                        </li>

                        <SidebarItem
                            title="Base"
                            iconClass="fas fa-layer-group"
                            isOpen={baseIsOpen}
                            onClick={() => setBaseIsOpen(!baseIsOpen)}
                        >
                            <ul>
                                <SidebarLink to="/avatar" text="Avatars" />
                                <SidebarLink to="/button" text="Buttons" />
                                <SidebarLink to="/grid" text="Grid System" />
                                <SidebarLink to="/panel" text="Panels" />
                                <SidebarLink to="/notification" text="Notifications" />
                                <SidebarLink to="/sweet" text="Sweet Alert" />
                                <SidebarLink to="/font" text="Font Awesome Icons" />
                                <SidebarLink to="/icon" text="Simple Line Icons" />
                                <SidebarLink to="/typo" text="Typography" />
                            </ul>
                        </SidebarItem>

                        <SidebarItem
                            title="Sidebar Layouts"
                            iconClass="fas fa-th-list"
                            isOpen={layoutIsOpen}
                            onClick={() => setLayoutIsOpen(!layoutIsOpen)}
                        >
                            <ul>
                                <SidebarLink to="/sidebar" text="Sidebar Style 2" />
                                <SidebarLink to="/sidebar" text="Icon Menu" />
                            </ul>
                        </SidebarItem>

                        <SidebarItem
                            title="Forms"
                            iconClass="fas fa-pen-square"
                            isOpen={formIsOpen}
                            onClick={() => setFormIsOpen(!formIsOpen)}
                        >
                            <ul>
                                <SidebarLink to="../form" text="Basic Form" />
                            </ul>
                        </SidebarItem>

                        <SidebarItem
                            title="Tables"
                            iconClass="fas fa-table"
                            isOpen={tableIsOpen}
                            onClick={() => setTableIsOpen(!tableIsOpen)}
                        >
                            <ul>
                                <SidebarLink to="/basic" text="Basic Table" />
                                <SidebarLink to="/data" text="Datatables" />
                            </ul>
                        </SidebarItem>

                        <SidebarItem
                            title="Maps"
                            iconClass="fas fa-map-marker-alt"
                            isOpen={mapIsOpen}
                            onClick={() => setMapIsOpen(!mapIsOpen)}
                        >
                            <ul>
                                <SidebarLink to="/google" text="Google Maps" />
                                <SidebarLink to="/vector" text="Jsvectormap" />
                            </ul>
                        </SidebarItem>

                        <SidebarItem
                            title="Charts"
                            iconClass="far fa-chart-bar"
                            isOpen={chartIsOpen}
                            onClick={() => setChartIsOpen(!chartIsOpen)}
                        >
                            <ul>
                                <SidebarLink to="/chart" text="Chart Js" />
                                <SidebarLink to="/spark" text="Sparkline" />
                            </ul>
                        </SidebarItem>

                        <SidebarLink to="/widget" text="Widgets" iconClass="fas fa-desktop" badgeText="4" />
                        <SidebarLink to="/document" text="Documentation" iconClass="fas fa-file" badgeText="1" />

                        <SidebarItem
                            title="Menu Levels"
                            iconClass="fas fa-bars"
                            isOpen={menuIsOpen}
                            onClick={() => setMenuIsOpen(!menuIsOpen)}
                        >
                            <ul>
                                <SidebarItem title="Level 1" isOpen={menuIsOpen}>
                                    {/* Add nested menu items if needed */}
                                </SidebarItem>
                            </ul>
                        </SidebarItem>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Reusable components for Sidebar items and links
const SidebarItem = ({ title, iconClass, isOpen, onClick, children }) => (
    <li className="nav-item">
        <a
            onClick={onClick}
            style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                color: '#fff',
            }}
        >
            {iconClass && <i className={`${iconClass} text-white`} />}
            <p style={{ marginLeft: '10px' }}>{title}</p>
            <span
                className="caret"
                style={{
                    marginLeft: 'auto',
                    transition: 'transform 0.3s',
                    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                }}
            />
        </a>
        <div
            style={{
                maxHeight: isOpen ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out, padding 0.3s ease-in-out',
                paddingLeft: isOpen ? '20px' : '0',
            }}
        >
            {children}
        </div>
    </li>
);

const SidebarLink = ({ to, text, iconClass, badgeText }) => (
    <li className="nav-item">
        <Link to={to} className="text-white hover:text-white" style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            {iconClass && <i className={`${iconClass} text-white`} />}
            <p style={{ marginLeft: '10px' }}>{text}</p>
            {badgeText && <span className="badge badge-success">{badgeText}</span>}
        </Link>
    </li>
);

export default Sidebar;
