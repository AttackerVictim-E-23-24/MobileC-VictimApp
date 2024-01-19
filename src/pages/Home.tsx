import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import MonitoringView from "../View/MonitoringView";
import GeolocationView from "../View/GeolocationView";
import MotionView from "../View/MotionView";
import NetworkView from "../View/NetworkView"; // Importa NetworkView
import AlertView from "../View/AlertView"; // Importa AlertView
import NotificationView from '../View/NotificationView'; // Importa NotificationView
import GoogleMapsView from "../View/GoogleMapsView";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Victim App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Victim App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <MonitoringView/>
        <NotificationView />

        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Último envío de datos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <GeolocationView />
            <MotionView />
            <NetworkView />
          </IonCardContent>
        </IonCard>
        <br />
        <br />
        <IonCard>
          <IonCardContent>
            <AlertView countdown={true} />
          </IonCardContent>
        </IonCard>

        <AlertView countdown={false} />
        <GoogleMapsView />
      </IonContent>
    </IonPage>
  );
};

export default Home;
