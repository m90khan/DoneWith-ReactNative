import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import useListings from '../api/data';
import ActivityIndicator from '../components/ActivityIndicator';
function ListingsScreen({ navigation }) {
  const { listings } = useListings();
  const [loading, setLoading] = useState(false);
  return (
    <Screen style={styles.screen}>
      {listings ? (
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()} // unique key
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={'$' + item.price}
              image={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator visible='true' />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListingsScreen;
