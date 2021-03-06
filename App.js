import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Image, View, Platform } from 'react-native';
import AppLoading from 'expo-app-loading';

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
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Button from './app/components/Button';
import ListingEditScreen from './app/screens/ListingEditScreen';

import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';
// import logger from './app/utility/logger';

// logger.start();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // if (!isReady)
  //   return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// const [imageUris, setImageUris] = useState([]);

// const handleAdd = (uri) => {
//   setImageUris([...imageUris, uri]);
// };
// const handleRemove = (uri) => {
//   setImageUris(imageUris.filter((img) => img !== uri));
// };

/*
            
*/
