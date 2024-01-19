import React, { useEffect, useState } from 'react';
import { AlertRepository } from '../Repository/AlertRepository';

const useAlertViewModel = () => {
  const [message, setMessage] = useState<string | null>(null);

  const alertRepository = new AlertRepository();

  const activateCountdownEndAlert = async () => {
    await alertRepository.controlPointAlert();
    setMessage(`Countdown end alert activated at ${new Date().toLocaleTimeString()}`);
  };

  const activateSOSAlert = async () => {
    await alertRepository.SOSAlert();
    setMessage(`SOS alert activated at ${new Date().toLocaleTimeString()}`);
  };


  return {
    
    activateCountdownEndAlert,
    activateSOSAlert,
    message,
  };
};

export default useAlertViewModel;