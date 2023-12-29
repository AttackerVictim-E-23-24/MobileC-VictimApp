import React from 'react';
import useGeolocationViewModel from '../ViewModel/GeolocationViewModel';

const GeolocationView: React.FC = () => {
  const { latitude, longitude, accuracy, message } = useGeolocationViewModel(); // Accede al message desde el ViewModel

  return (
    <>{message && <p style={{ color: 'blue', padding: '10px' }}>{message}</p>} {/* Muestra el mensaje con padding y letra azul */}
      
      <h2>Geolocation</h2>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </>
  );
};

export default GeolocationView;