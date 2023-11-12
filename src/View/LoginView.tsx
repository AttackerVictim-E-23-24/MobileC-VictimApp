// Login.tsx

import React from 'react';
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
  IonLabel,
  IonItem,
} from '@ionic/react';
import useLoginViewModel from '../ViewModel/LoginViewModel';

const Login: React.FC = () => {
  const {
    username,
    password,
    isLoading,
    error,
    setUsername,
    setPassword,
    login,
  } = useLoginViewModel();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <IonItem>
                <IonLabel position="floating">Usuario</IonLabel>
                <IonInput
                  type="text"
                  value={username}
                  onIonChange={(e) => setUsername(e.detail.value!)}
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                />
              </IonItem>
              <IonButton expand="full" onClick={login} disabled={isLoading}>
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </IonButton>
              {error && <div>{error}</div>}
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
