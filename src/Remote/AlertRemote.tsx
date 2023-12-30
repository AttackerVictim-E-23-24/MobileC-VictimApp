import axios from 'axios';
import { BaseURL } from './BaseURL';
import { LoginModel } from '../Model/LoginModel';

export class AlertRemote {
  async sendAlert(alertType: string, riskLevel: number): Promise<any> {
    const username = LoginModel.getInstance().getUsername();
    const currentime = new Date().toISOString();

    try {
      const data = {
        username,
        tipoAlerta: alertType,
        riesgo: riskLevel,
        currentime
      };

      const response = await axios.post(`${BaseURL.baseUrl}/users/setAlerta`, data, { timeout: 5000 });

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