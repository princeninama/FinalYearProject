
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const CampusMap = () => {
  const markers = [
    { position: [51.505, -0.09], name: 'Library' },
    { position: [51.515, -0.1], name: 'Cafeteria' },
  ];

  return (
    <>
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
    <TileLayer
    
/>

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  
      </>
  );
};

export default CampusMap;