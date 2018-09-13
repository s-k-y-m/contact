import React from 'react';

var initMap = () => {
  var uluru = { lat: -25.344, lng: 131.036 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
};

const Map2 = () => {
  return (
    <div>
      <h3>My Google Maps Demo</h3>
      <div id="map" />
    </div>
  );
};

export default Map2;
