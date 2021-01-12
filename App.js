import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
/* Density independent pixels width: 150, height: 70
 */

export default function App() {
  const [menu, setMenu] = useState('khana khao leo');
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ backgroundColor: 'dodgerblue', width: '50%', height: 70 }}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
});
