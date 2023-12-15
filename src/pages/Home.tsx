import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MonitoringView from '../View/MonitoringView';
import GeolocationView from '../View/GeolocationView';
import MotionView from '../View/MotionView';
import MyMap from '../View/GoogleMapsView';

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
        <MyMap/>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
