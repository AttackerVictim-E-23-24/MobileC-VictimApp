// GoogleMapsView.tsx
import React from 'react';
import useGoogleMapsViewModel from '../ViewModel/GoogleMapsViewModel';

const GoogleMapsView = () => {
  const { zones, mapRef } = useGoogleMapsViewModel();

  return (
    <div>
      <h1>Map</h1>
      <div ref={mapRef} style={{ height: '100vh', width: '100%' }}></div>
      {zones.getZones().map(zone => (
        <div key={zone.id}>
          <h2>Zone {zone.id}</h2>
          {zone.points.map((point, index) => (
            <p key={index}>Point: {point.latitude}, {point.longitude}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GoogleMapsView;