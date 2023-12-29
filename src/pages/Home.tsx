import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MonitoringView from '../View/MonitoringView';
import GeolocationView from '../View/GeolocationView';

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Victim App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Victim App</IonTitle>
          </IonToolbar>
        </IonHeader>

        <MonitoringView/>
        
        <IonCard>
          <IonCardHeader>
              <IonCardTitle>Título de la Tarjeta</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>   
                       
            <GeolocationView/>
            
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
