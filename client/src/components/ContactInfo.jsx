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
import Map2 from './Map/Map2.jsx';
import styles from '../styles/styles.css';

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
    <div className={styles.contactContainer}>
      <div className={styles.restaurantTimes}>
        <ClockIcon />
        <div className={styles.contactText}>
          <OpenNow times={openNow} currentDay={currentDay} />
        </div>
      </div>
      <div className={styles.restaurantAddress}>
        <MapIcon />
        <p className={styles.contactText}>{address}</p>
      </div>
      <div className={styles.restaurantPhoneNumber}>
        <PhoneIcon />
        <p className={styles.contactText}>{phoneNumber}</p>
      </div>
      <div className={styles.restaurantWebsite}>
        <WebsiteIcon />
        <p className={styles.contactText}>{websiteURL}</p>
      </div>
      <div className={styles.restaurantDirections}>
        <DirectionsIcon />
        <p className={styles.contactText}>Get Directions</p>
      </div>
      <div>
        <div className={styles.restaurantGoogleMap}>
          <Map isMarkerShown />
        </div>
      </div>
      <div>
        <Modal className={styles.modal} name={name} />
      </div>
    </div>
  );
};

export default ContactInfo;
