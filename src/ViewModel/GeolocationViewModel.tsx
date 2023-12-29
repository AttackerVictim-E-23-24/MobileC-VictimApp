import { useState, useEffect } from 'react';
import { GeolocationRepository } from '../Repository/GeolocationRepository';
import { GeolocationModel } from '../Model/GeolocationModel';
import { MonitoringRepository } from '../Repository/MonitoringRepository';

const useGeolocationViewModel = () => {
  const [latitude, setLatitude] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null); // Nuevo estado para el mensaje

  const geolocationModel = new GeolocationModel();
  const geolocationRepository = new GeolocationRepository(geolocationModel);
  const monitoringRepository = new MonitoringRepository();

  useEffect(() => {
    const fetchGeolocation = async () => {
      await geolocationRepository.setCurrentPosition();
      setLatitude(geolocationModel.getLatitude().toFixed(5));
      setLongitude(geolocationModel.getLongitude().toFixed(5));
      setAccuracy(geolocationModel.getAccuracy().toFixed(5));
    };

    fetchGeolocation();

    const frequency = monitoringRepository.getFrecuency();
    const intervalId = setInterval(async () => {
      const response = await geolocationRepository.sendData();
      if (response.respuesta) {
        const newMessage = `${response.mensaje} ${new Date().toLocaleTimeString()}`;
        setMessage(newMessage); // Actualiza el estado del mensaje
      }
    }, frequency ); // Convert frequency from seconds to milliseconds

    return () => clearInterval(intervalId);
  }, [geolocationRepository, geolocationModel, monitoringRepository]);

  return {
    latitude,
    longitude,
    accuracy,
    message, // Devuelve el mensaje para que la vista pueda acceder a él
  };
};

export default useGeolocationViewModel;