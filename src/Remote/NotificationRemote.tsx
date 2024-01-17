import axios from 'axios';
import { BaseURL } from './BaseURL';
import { LoginModel } from '../Model/LoginModel';

export class NotificationRemote {

    public async putToken(token: string) {
        const username = LoginModel.getInstance().getUsername();

        try {
            const response = await axios.put(`${BaseURL.baseUrl}/users/putToken/${username}/${token}`);

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            const responseData = response.data;

            if (responseData.respuesta.imei !== token) {
                throw new Error('IMEI is not equal to token');
            }

            return responseData;
        } catch (error) {
            if (axios.isCancel(error)) {
                throw { code: 'TIMEOUT_ERROR', message: 'La solicitud tardó demasiado tiempo, por favor verifica tu conexión a internet' };
            }
            throw new Error('Error de red o del servidor');
        }
    }
}