import React from 'react';
import Modal from './Modal.jsx';
import ClockIcon from './icons/ClockIcon.jsx';
import MapIcon from './icons/MapIcon.jsx';
import PhoneIcon from './icons/PhoneIcon.jsx';
import WebsiteIcon from './icons/WebsiteIcon.jsx';
import DirectionsIcon from './icons/DirectionsIcon.jsx';
<<<<<<< HEAD
//
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

=======

const ContactInfo = () => {
>>>>>>> ac090f55f964132e7c913372ea35af74bd6ced37
  return (
    <div className="contact-container">
      <div className="restaurant-times">
        <ClockIcon />
        <p>Restaurant Times</p>
      </div>
      <div className="restaurant-address">
        <MapIcon />
        <p>Address</p>
      </div>
      <div className="restaurant-phoneNumber">
        <PhoneIcon />
        <p>Phone Number</p>
      </div>
      <div className="restaurant-website">
        <WebsiteIcon />
        <p>Website</p>
      </div>
      <div className="restaurant-directions">
        <DirectionsIcon />
        <p>Get Directions</p>
      </div>
      <div className="restaurant-map">
        <Modal />
        <p>Map</p>
      </div>
    </div>
  );
};

export default ContactInfo;
//
