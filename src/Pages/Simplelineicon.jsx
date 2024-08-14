import React from 'react';
import { Link } from 'react-router-dom';
import * as SiIcons from 'react-icons/si';

const Simplelineicon = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="page-inner">
        <div className="page-header mb-4">
          <h3 className="text-lg font-bold mb-2">Icons</h3>
          <ul className="breadcrumbs flex items-center text-sm text-gray-600">
            <li className="nav-home">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="icon-home" />
              </a>
            </li>
            <li className="separator mx-2">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#" className="text-gray-600 hover:text-gray-800">Base</a>
            </li>
            <li className="separator mx-2">
              <i className="icon-arrow-right" />
            </li>
            <li className="nav-item">
              <a href="#" className="text-gray-600 hover:text-gray-800">Line Awesome</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card bg-white shadow rounded-lg">
              <div className="card-header p-4 border-b border-gray-200">
                <div className="card-title text-lg font-semibold">Simple Line Icons</div>
                <div className="card-category text-gray-600 text-sm">
                  Simple and Minimal Line Icons from{' '}
                  <Link
                    className="text-blue-500 hover:text-blue-700"
                    to="https://github.com/thesabbir/simple-line-icons"
                  >
                    Simple Line Icons
                  </Link>
                </div>
              </div>
              <div className="card-body p-4">
                <div id="row-demo-icon" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {Object.keys(SiIcons).map((iconName) => {
                    const IconComponent = SiIcons[iconName];
                    return (
                      <div key={iconName} className="text-center">
                        <IconComponent size={24} className="mx-auto text-gray-700 mb-2"/>
                        <p className="text-gray-600 text-xs truncate">{iconName}</p>
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

export default Simplelineicon;
