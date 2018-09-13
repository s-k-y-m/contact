import React from 'react';
import Modal from '../Modal.jsx';

const mapStyle = {
  width: '100%',
  height: '100%'
};

const Map = () => {
  return (
    <div style={mapStyle}>
      <iframe
        width="100%"
        height="600"
        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      >
        <a href="https://www.maps.ie/create-google-map/">Create Google Map</a>
      </iframe>
      <Modal />
    </div>
  );
};

export default Map;
