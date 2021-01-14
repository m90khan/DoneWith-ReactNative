import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './../config/colors';
const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    // image picker permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need  camera roll permissions to make this work!');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        {
          text: 'No',
        },
      ]);
    }
  };
  const selectImage = async () => {
    // image library for user to select an image'
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (err) {
      console.log('error ' + err);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons name='camera' size={24} color={colors.medium} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: 'center',
    height: 100,
    overflow: 'hidden',

    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ImageInput;
