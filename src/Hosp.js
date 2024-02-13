// // Hosp.js

// import React, { useState, useEffect } from 'react';
// import Map from './Map'; // Create a separate Map component to handle the map display

// const Hosp = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [nearbyPlaces, setNearbyPlaces] = useState([]);

//   useEffect(() => {
//     // Fetch the user's location or use a default location
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       },
//       (error) => {
//         console.error('Error getting user location:', error);
//         // Set a default location (e.g., your city's coordinates)
//         setUserLocation({ lat: 40.7128, lng: -74.0060 });
//       }
//     );

//     // Fetch nearby places using the OpenStreetMap API (example)
//     const fetchNearbyPlaces = async () => {
//       try {
//         // Use your own endpoint for fetching nearby places
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/search?format=json&limit=10&lat=${userLocation.lat}&lon=${userLocation.lng}&radius=1000&type=hospital`
//         );
//         const data = await response.json();
//         setNearbyPlaces(data);
//       } catch (error) {
//         console.error('Error fetching nearby places:', error);
//       }
//     };

//     if (userLocation) {
//       fetchNearbyPlaces();
//     }
//   }, [userLocation]);

//   return (
//     <div>
//       <h2>Nearby Deaf Healthcare</h2>
//       {userLocation ? (
//         <Map userLocation={userLocation} nearbyPlaces={nearbyPlaces} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Hosp;
// Hosp.js

import React, { useState, useEffect } from 'react';
// import Map from './Map'; // Create a separate Map component to handle the map display

const Hosp = () => {
  

  return (
    <div>
      <h2>Nearby Deaf Healthcare</h2>
     
    </div>
  );
};

export default Hosp;
