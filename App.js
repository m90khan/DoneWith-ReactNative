import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import colors from './app/config/colors';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from './app/components/Card';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((img) => img !== uri));
  };
  return (
    <SafeAreaView style={styles.screen}>
      {/* <Button title='Slect Image' onPress={() => selectImage()} />
      <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} /> */}
      <ImageInputList
        imageUris={imageUris}
        onAddImage={(uri) => handleAdd(uri)}
        onRemoveImage={handleRemove}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
  },
});
