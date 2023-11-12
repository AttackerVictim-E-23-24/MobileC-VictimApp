import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Login from '../View/LoginView';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Login/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
