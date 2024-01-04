import { PushNotifications, PushNotificationSchema } from "@capacitor/push-notifications";
import { NotificationModel } from "../Model/NotificationModel";

export class NotificationRepository {
  async registerNotifications(): Promise<void> {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== "granted") {
      throw new Error("User denied permissions!");
    }

    await PushNotifications.register();
  }
  
  async hasPermissions(): Promise<boolean> {
    let permStatus = await PushNotifications.checkPermissions();
  
    if (permStatus.receive === "prompt") {
      permStatus = await PushNotifications.requestPermissions();
    }
  
    return permStatus.receive === "granted";
  }

  async addListeners(): Promise<void> {
    // Listener for registration
    await PushNotifications.addListener("registration", (token) => {
      console.info("PushNotifications registration successful", token);
    });

    // Listener for registration errors
    await PushNotifications.addListener("registrationError", (error) => {
      console.error("Error on registration", error);
    });

    // Listener for push notifications
    await PushNotifications.addListener(
      "pushNotificationReceived",
      (notification: PushNotificationSchema) => {
        console.log("Push notification received", notification);
      }
    );

  }

  async getDeliveredNotification(): Promise<NotificationModel | null> {
    const deliveredNotifications =
      await PushNotifications.getDeliveredNotifications();
    const lastNotification =
      deliveredNotifications.notifications[
        deliveredNotifications.notifications.length - 1
      ];

    if (
      !lastNotification ||
      !lastNotification.title ||
      !lastNotification.body
    ) {
      return null;
    }

    return new NotificationModel(lastNotification.title, lastNotification.body);
  }
}
