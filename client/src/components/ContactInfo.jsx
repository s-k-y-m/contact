import React from 'react';
import Modal from './Modal.jsx';
import ClockIcon from './icons/ClockIcon.jsx';
import MapIcon from './icons/MapIcon.jsx';
import PhoneIcon from './icons/PhoneIcon.jsx';
import WebsiteIcon from './icons/WebsiteIcon.jsx';
import DirectionsIcon from './icons/DirectionsIcon.jsx';
import Sticky from './Sticky.jsx';
import OpenNow from './OpenNow.jsx';
import Map from './Map/Map.jsx';

var moment = require('moment');

const ContactInfo = props => {
  const {
    openNow,
    name,
    address,
    phoneNumber,
    websiteURL,
    getDirectionsURL
  } = props.restaurant;

  var currentDay = moment().format('dddd');

  return (
    <div className="contact-container">
      <div className="restaurant-times">
        <ClockIcon />
        <div className="contact-text">
          <OpenNow times={openNow} currentDay={currentDay} />
        </div>
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
      <div className="restaurant-googleMap">
        <Map isMarkerShown />
      </div>
      <div className="restaurant-map">
        <Modal />
      </div>
      <Sticky />
    </div>
  );
};

export default ContactInfo;
//
