import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const Fontawesome = () => {
  // Get all icon names that start with 'fa'
  const iconList = Object.keys(Icons).filter(icon => icon.startsWith('fa'));

  // Function to copy the icon JSX code to clipboard
  const copyToClipboard = (iconName) => {
    const iconJSX = `<FontAwesomeIcon icon="fa-solid ${Icons[iconName].iconName}" />`;
    navigator.clipboard.writeText(iconJSX).then(() => {
      alert(`Copied: ${iconJSX}`);
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header">
          <h3 className="fw-bold mb-3">Icons</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <a href="#">
                <FontAwesomeIcon icon={Icons.faHome} />
              </a>
            </li>
            <li className="separator">
              <FontAwesomeIcon icon={Icons.faArrowRight} />
            </li>
            <li className="nav-item">
              <a href="#">Base</a>
            </li>
            <li className="separator">
              <FontAwesomeIcon icon={Icons.faArrowRight} />
            </li>
            <li className="nav-item">
              <a href="#">Line Awesome</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Font Awesome Icons</div>
                <div className="card-category">
                  Modern Font Icon from
                  <a className="link" href="https://fontawesome.com">
                    Font Awesome
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div id="row-demo-icon" className="row">
                  {iconList.map((iconName, index) => {
                    const icon = Icons[iconName];
                    return (
                      <div
                        key={index}
                        className="col-6 col-md-2 text-center mb-4 "
                        onClick={() => copyToClipboard(iconName)}
                        style={{ cursor: 'pointer' }}
                      >
                        <FontAwesomeIcon icon={icon} size="2x" className='text-gray-700' />
                        <p className='text-gray-600' style={{ fontSize: '12px' }}>{iconName.replace('fa', '')}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fontawesome;
