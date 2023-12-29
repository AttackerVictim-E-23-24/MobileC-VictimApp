import axios from 'axios';
import { BaseURL } from './BaseURL';
import { LoginModel } from '../Model/LoginModel';

export class GeolocationRemote {
  async sendData(geolocationList: { latitude: number; longitude: number; currentTime: string }[]) {
    const username = LoginModel.getInstance().getUsername();

    try {
      const data = {
        username,
        geolocation: geolocationList.map(geo => ({
          latitud: geo.latitude,
          longitud: geo.longitude,
          currentTime: geo.currentTime
        }))
      };

      const response = await axios.post(`${BaseURL.baseUrl}/users/setGeolocation`, data, { timeout: 5000 });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
            throw { code: 'TIMEOUT_ERROR', message: 'La solicitud tardó demasiado tiempo, por favor verifica tu conexión a internet' };
        }
      }
      throw new Error('Error de red o del servidor');
    }
  }
}