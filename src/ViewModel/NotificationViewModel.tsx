import { useState, useEffect } from 'react';
import { NotificationRepository } from '../Repository/NotificationRepository';
import { NotificationModel } from '../Model/NotificationModel';

export const useNotificationViewModel = () => {
  const [notification, setNotification] = useState<NotificationModel | null>(null);
  const notificationRepository = new NotificationRepository();
  const notificationModel = NotificationModel.getInstance();

  useEffect(() => {
    const registerNotifications = async () => {
      try {
        await notificationRepository.registerNotifications();
        setNotification(notificationModel);
      } catch (error) {
        console.error(error);
      }
    };

    const getDeliveredNotification = async () => {
      try {
        const deliveredNotification = await notificationRepository.getDeliveredNotification();
        setNotification(deliveredNotification);
      } catch (error) {
        console.error(error);
      }
    };

    registerNotifications();
    getDeliveredNotification();
  }, [notificationRepository]);

  return { notification, token: notificationModel.token };
};