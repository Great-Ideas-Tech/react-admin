import React from 'react';
import { Link } from 'react-router-dom';

const Googlemap = () => {
  return (
    <div className="container">
      <div className="page-inner">
        <div className="page-header mb-0">
          <h3 className="fw-bold mb-3">Google Maps</h3>
          <ul className="breadcrumbs mb-3">
            <li className="nav-home">
              <Link to="/home">
                <i className="icon-home"></i>
              </Link>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <Link to="/maps">Maps</Link>
            </li>
            <li className="separator">
              <i className="icon-arrow-right"></i>
            </li>
            <li className="nav-item">
              <Link to="/google-maps">Google Maps</Link>
            </li>
          </ul>
        </div>
        <div className="page-category">Help users find your address.</div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Our Location</div>
              </div>
              <div className="card-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63536.63871717301!2d95.32870249999999!3d5.5611019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040377ae63dbcdf%3A0x3039d80b220cb90!2sBanda%20Aceh%2C%20Kota%20Banda%20Aceh%2C%20Aceh!5e0!3m2!1sid!2sid!4v1701054428265!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Googlemap;
