import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import useWarningViewModel from '../ViewModel/WarningsViewModel';

const WarningView = () => {
  const { isNotifying, isCountingDown, isAlerting, isVibrating, notify, startCountdown, soundAlert, vibrate } = useWarningViewModel();

  return (
    <div>
        <IonButton disabled={isNotifying} onClick={notify}>Notify</IonButton>
        <IonButton disabled={isCountingDown} onClick={startCountdown}>Start Countdown</IonButton>
        <IonButton disabled={isAlerting} onClick={soundAlert}>Sound Alert</IonButton>
        <IonButton disabled={isVibrating} onClick={vibrate}>Vibrate</IonButton>
    </div>
  );
};

export default WarningView;