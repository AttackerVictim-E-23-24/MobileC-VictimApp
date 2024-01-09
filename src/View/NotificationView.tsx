import React from 'react';
import { useNotificationViewModel } from "../ViewModel/NotificationViewModel";

const NotificationView: React.FC = () => {
  const { notification, token } = useNotificationViewModel();

  return (
    <div>
      {notification ? (
        <div>
          <h1>{notification.title}</h1>
          <p>{notification.body}</p>
          <p>Token: {token}</p>
        </div>
      ) : (
        <p>No notifications</p>
      )}
    </div>
  );
};

export default NotificationView;