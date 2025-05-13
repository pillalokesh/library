import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
 
const Contact = () => {
  // Define the map container style
  const mapContainerStyle = {
    width: '100%',
    height: '300px',
  };

  // Center the map on Visakhapatnam Public Library
  const center = {
    lat: 17.6868, // Latitude for Vizag
    lng: 83.2185, // Longitude for Vizag
  };

  // Load the Google Maps API script
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY', // Replace with your Google Maps API key
  });

  return (
    <div className="contact-wrapper">
              <header className="rules-header">
        <h1 className="rules-title">Library – Rules</h1>
        <nav className="breadcrumb-nav">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator"> &gt; </span>
          <span className="breadcrumb-current">Library – Rules</span>
        </nav>
      </header>

      <div className="contact-content">
        <div className="info-section">
          <h2 className="info-title">Contact Info</h2>
          <div className="info-item">
            <span className="info-icon">📍</span>
            <p className="info-text">
              MVP Double Road <br /> MVP , Visakhapatnam <br />Andhra Pradesh - 530016
            </p>
          </div>
          <div className="info-item">
            <span className="info-icon">✉️</span>
            <p className="info-text">visakhapatnamportlibrary.com</p>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <p className="info-text">0891-2759212</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <hr style={{marginTop:"10px"}} />
        <div className="enquiry-section">
          <h2 className="enquiry-title">Enquiry Form</h2>
          <div className="enquiry-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span className="form-icon">👤</span>
                Enter Your Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <span className="form-icon">✉️</span>
                Enter Your Mail Id
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter Your Mail Id"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile" className="form-label">
                <span className="form-icon">📱</span>
                Enter Your Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                className="form-input"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <textarea
                id="subject"
                className="form-textarea"
                placeholder="Enter Here"
                rows="4"
              ></textarea>
            </div>
            <button className="submit-btn">SUBMIT NOW</button>
          </div>
        </div>
      </div>
      <div className="map-section">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div className="map-placeholder">
            <p className="map-text">Loading Map...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;