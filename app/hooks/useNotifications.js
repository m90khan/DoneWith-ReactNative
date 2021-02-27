import { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';

export default useNotifications = (notificationListener) => {
  /*   */
  useEffect(() => {
    registerForPushNotifications();
    // event listener
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      /* get user permission  */
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      /* get token */
      const token = await Notifications.getExpoPushTokenAsync();
      // send token to server
      expoPushTokensApi.register(token);
      console.log(token);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  };
};

/* Push token: uniquely generated string generated on each app install
- register app to get the push notification token from expo
- store token on database
- send a notifiation
- handle received notification
*/
