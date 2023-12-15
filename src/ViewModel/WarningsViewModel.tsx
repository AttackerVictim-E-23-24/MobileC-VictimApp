import { useState, useEffect } from 'react';
import WarningsRepository from '../Repository/WarningsRepository';

const useWarningViewModel = () => {
  const [isNotifying, setIsNotifying] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [isAlerting, setIsAlerting] = useState(false);
  const [isVibrating, setIsVibrating] = useState(false);

  const warningRepo = new WarningsRepository();

  const notify = async () => {
    setIsNotifying(true);
    await warningRepo.createNotification('Notification message');
    setIsNotifying(false);
  };

  const startCountdown = async () => {
    setIsCountingDown(true);
    await warningRepo.startCountdownAlert(10); // Countdown from 10
    setIsCountingDown(false);
  };

  const soundAlert = async () => {
    setIsAlerting(true);
    await warningRepo.createSoundAlert();
    setIsAlerting(false);
  };

  const vibrate = async () => {
    setIsVibrating(true);
    warningRepo.createVibrationAlert();
    setIsVibrating(false);
  };

  return { isNotifying, isCountingDown, isAlerting, isVibrating, notify, startCountdown, soundAlert, vibrate };
};

export default useWarningViewModel;