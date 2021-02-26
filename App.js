import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Button, Image, View, Platform } from 'react-native';

import Screen from './app/components/Screen';

import navigationTheme from './app/navigation/navigationTheme';
/*
 createStackNavigator is a function that returns an object containing 2 properties: 
 Screen and Navigator.  
 NavigationContainer is a component which manages our navigation tree and contains the navigation state.
*/
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import OfflineNotice from './app/components/OfflineNotice';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { useDimensions } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//  const netInfo =  useNetInfo();
//   return  netInfo.isInternetReachable ?  <Text>Hello</Text> : ;
// }

export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

// export default function App() {
//   console.log(useDimensions());
//   return <WelcomeScreen />;
// }

const styles = StyleSheet.create({
  container: {
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
// const [imageUris, setImageUris] = useState([]);

// const handleAdd = (uri) => {
//   setImageUris([...imageUris, uri]);
// };
// const handleRemove = (uri) => {
//   setImageUris(imageUris.filter((img) => img !== uri));
// };
