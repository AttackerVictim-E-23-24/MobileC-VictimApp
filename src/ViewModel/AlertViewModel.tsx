import React, { useEffect, useState } from 'react';
import { AlertRepository } from '../Repository/AlertRepository';

const useAlertViewModel = () => {
  const [message, setMessage] = useState<string | null>(null);

  const alertRepository = new AlertRepository();

  const activateProximityAlert = async () => {
    await alertRepository.proximityAlert();
    setMessage(`Proximity alert activated at ${new Date().toLocaleTimeString()}`);
  };

  const activateCountdownEndAlert = async () => {
    await alertRepository.SOSAlert();
    setMessage(`Countdown end alert activated at ${new Date().toLocaleTimeString()}`);
  };

  const activateSOSAlert = async () => {
    await alertRepository.controlPointAlert();
    setMessage(`SOS alert activated at ${new Date().toLocaleTimeString()}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      activateProximityAlert();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return {
    activateProximityAlert,
    activateCountdownEndAlert,
    activateSOSAlert,
    message,
  };
};

export default useAlertViewModel;