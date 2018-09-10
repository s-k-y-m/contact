import React from 'react';
import Modal from './Modal.jsx';
import ClockIcon from './icons/ClockIcon.jsx';
import MapIcon from './icons/MapIcon.jsx';
import PhoneIcon from './icons/PhoneIcon.jsx';
import WebsiteIcon from './icons/WebsiteIcon.jsx';
import DirectionsIcon from './icons/DirectionsIcon.jsx';

const ContactInfo = props => {
  const {
    openNow,
    name,
    address,
    phoneNumber,
    websiteURL,
    getDirectionsURL
  } = props.restaurant;

  console.log(openNow, name, address);

  return (
    <div className="contact-container">
      <div className="restaurant-times">
        <ClockIcon />
        <p className="contact-text">Restaurant Times</p>
      </div>
      <div className="restaurant-address">
        <MapIcon />
        <p className="contact-text">{address}</p>
      </div>
      <div className="restaurant-phoneNumber">
        <PhoneIcon />
        <p className="contact-text">{phoneNumber}</p>
      </div>
      <div className="restaurant-website">
        <WebsiteIcon />
        <p className="contact-text">{websiteURL}</p>
      </div>
      <div className="restaurant-directions">
        <DirectionsIcon />
        <p className="contact-text">Get Directions</p>
      </div>
      <div className="restaurant-map">
        <Modal />
      </div>
    </div>
  );
};

export default ContactInfo;
