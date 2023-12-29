// Login.tsx

import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader, IonTitle, IonToolbar
} from '@ionic/react';
import LoginView from '../View/LoginView';

const Login: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Victim App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <LoginView/>
      </IonContent>
    </IonPage>
  );
};

export default Login;
