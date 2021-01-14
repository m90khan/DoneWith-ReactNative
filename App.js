import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import LoginScreen from './app/screens/LoginScreen';
export default function App() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
