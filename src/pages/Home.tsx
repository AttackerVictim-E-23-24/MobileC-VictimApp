import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MonitoringView from '../View/MonitoringView';
import GeolocationView from '../View/GeolocationView';
import MotionView from '../View/MotionView';

const Tab1: React.FC = () => {
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
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <MonitoringView/>
        
        <IonCard>
          <IonCardHeader>
              <IonCardTitle>Título de la Tarjeta</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>   
                       
            <GeolocationView/>
            <MotionView/>
            
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
