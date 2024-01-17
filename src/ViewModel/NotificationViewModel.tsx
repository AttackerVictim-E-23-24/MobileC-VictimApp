import { useState, useEffect } from 'react';
import { NotificationRepository } from '../Repository/NotificationRepository';

export const useNotificationViewModel = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const notificationRepository = new NotificationRepository();

  useEffect(() => {
    const registerAndAddListeners = async () => {
      try {
        console.log("call notification repository registerNotifications");
        await notificationRepository.registerNotifications();
        await notificationRepository.addListeners();
        
        const permission = await notificationRepository.hasPermissions();
        setHasPermission(permission);

        // Enviar el token después de agregar los listeners
        await notificationRepository.sendToken();
      } catch (error) {
        console.error(error);
      }
    };

    registerAndAddListeners();
  }, []);

  return { hasPermission };
};