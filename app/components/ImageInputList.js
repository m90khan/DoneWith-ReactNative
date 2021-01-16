import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';
const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  // get the current instant of the view
  const scrollView = useRef();
  return (
    <View>
      {/* Wrap scrollview inside the VIEW because of the full height issue as scollview takes full height */}
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View style={styles.image} key={uri}>
              <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 7,
  },
});

export default ImageInputList;

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// const ImageInputList = () => {
//   return <View style={styles.container}></View>;
// };

// const styles = StyleSheet.create({
//   container: {
//   },
// });

// export default ImageInputList;
