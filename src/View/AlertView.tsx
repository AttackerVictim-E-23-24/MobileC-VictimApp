import React, { useState, useEffect } from "react";
import { IonButton } from "@ionic/react";
import useAlertViewModel from "../ViewModel/AlertViewModel";
import { MonitoringModel } from "../Model/MonitoringModel";
import { Dialog } from "@capacitor/dialog";

interface AlertViewProps {
  countdown?: boolean;
}

const AlertView: React.FC<AlertViewProps> = ({ countdown }) => {
  const { activateCountdownEndAlert, activateSOSAlert } = useAlertViewModel();
  const monitoring = MonitoringModel.getInstance();
  const [timeLeft, setTimeLeft] = useState(monitoring.getInactivityTime());
  const [isCountingDown, setIsCountingDown] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (isCountingDown && timeLeft > 0) {
      timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      handleCountdownEnd();
    }
    return () => clearTimeout(timerId);
  }, [timeLeft, isCountingDown]);

  const handleCountdownEnd = async () => {
    await activateCountdownEndAlert();
    if (timeLeft <= 0) {
      await Dialog.alert({
        title: "Alert",
        message:
          "Advirtiendo a las autoridades. Manténgase en una zona segura.",
      });
    }
  };

  const handleSOS = async () => {
    await activateSOSAlert();
    await Dialog.alert({
      title: "Alert",
      message: "Advirtiendo a las autoridades. Manténgase en una zona segura.",
    });
  };

  const startCountdown = () => {
    setIsCountingDown(true);
  };

  const cancelCountdown = () => {
    setIsCountingDown(false);
    setTimeLeft(monitoring.getInactivityTime());
  };

  return (
    <>
      {countdown ? (
        <div>
          <p>Countdown:</p> 
          <h1 style={{ textAlign: 'center' }}>{timeLeft}</h1>
          <IonButton style={{ textAlign: 'center' }} onClick={startCountdown}>Start Countdown</IonButton>
          <IonButton style={{ textAlign: 'center' }} onClick={cancelCountdown}>Cancel Countdown</IonButton>
        </div>
      ) : (
        <IonButton
          style={{ width: "96%", position: "absolute", bottom: "10px" }}
          color="danger"
          onClick={handleSOS}
        >
          SOS
        </IonButton>
      )}
    </>
  );
};

export default AlertView;
