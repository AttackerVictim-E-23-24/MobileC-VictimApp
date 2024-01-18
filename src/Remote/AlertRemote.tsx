import axios from 'axios';
import { BaseURL } from './BaseURL';
import { LoginModel } from '../Model/LoginModel';

export class AlertRemote {
  // ...otros métodos...

  async sendSOSAlert(): Promise<any> {
    const username = LoginModel.getInstance().getUsername();

    try {
      const response = await axios.get(`${BaseURL.baseUrl}/users/sos/${username}`, { timeout: 5000 });

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

  async sendControlPointAlert(): Promise<any> {
    const username = LoginModel.getInstance().getUsername();

    try {
      const response = await axios.get(`${BaseURL.baseUrl}/users/puntoDeControl/${username}`, { timeout: 5000 });

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