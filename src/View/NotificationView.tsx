import React from 'react';
import { useNotificationViewModel } from "../ViewModel/NotificationViewModel";

const NotificationView: React.FC = () => {
  const { hasPermission } = useNotificationViewModel();

  return (
    <div>
      {hasPermission ? (
        <p>Permission for notifications granted</p>
      ) : (
        <p>Permission for notifications not granted</p>
      )}
    </div>
  );
};

export default NotificationView;