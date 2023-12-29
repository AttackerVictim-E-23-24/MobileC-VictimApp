import axios from 'axios';
import { BaseURL } from './BaseURL';

export class LoginRemote {
    private baseUrl: string;

    constructor() {
        this.baseUrl = BaseURL.baseUrl;
    }

    public async requestLogin(username: string, password: string) {
        try {
            const response = await axios.post(`${this.baseUrl}/Login`, { username, password },{timeout: 5000});

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