// Map.js

import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ userLocation, nearbyPlaces }) => {
  useEffect(() => {
    // Check if the map container already exists
    const existingMapContainer = document.getElementById('map');
    
    if (existingMapContainer) {
      // If the map container exists, remove its content
      existingMapContainer.innerHTML = '';
    }

    // Initialize the map
    const map = L.map('map').setView([userLocation.lat, userLocation.lng], 13);

    // Add a tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Add a marker for the user's location
    L.marker([userLocation.lat, userLocation.lng])
      .addTo(map)
      .bindPopup('Your Location')
      .openPopup();

    // Add markers for nearby places
    nearbyPlaces.forEach((place) => {
      L.marker([place.lat, place.lon])
        .addTo(map)
        .bindPopup(place.display_name);
    });
  }, [userLocation, nearbyPlaces]);

  return <div id="map" style={{ height: '500px' }}></div>;
};

export default Map;
