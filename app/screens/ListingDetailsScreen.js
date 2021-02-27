import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import Text from '../components/Text';
import ContactSellerForm from '../components/ContactSellerForm';
import { Image } from 'react-native-expo-image-cache';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <KeyboardAvoidingView
      behavior='position'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint='light'
        uri={listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <Text style={{ color: colors.medium, fontSize: 15 }}>{listing.description}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={
              'https://res.cloudinary.com/m90khan/image/upload/v1614076029/AirHouse/Users/user-1_j3zuy0.png'
            }
            title='James K'
            subTitle='5 Listings'
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 250,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 15,
  },
});

export default ListingDetailsScreen;
