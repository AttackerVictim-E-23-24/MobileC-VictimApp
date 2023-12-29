import {  IonHeader,  IonTitle, IonToolbar, 
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,} from '@ionic/react';
import './css/Home.css';
  
import NetworkView from '../View/NetworkView'; // Importa NetworkView

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Attacker App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Attacker App</IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <IonCard>
          <IonCardHeader>
              <IonCardTitle>Último envío de ubicación</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <NetworkView/>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
