import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';

const initialMessages = [
  {
    id: 1,
    title: 'Sarah M',
    description: 'Hey! Is this item still available?',
    image:
      'https://res.cloudinary.com/m90khan/image/upload/v1614076033/AirHouse/Users/user-4_qibfn7.png',
  },
  {
    id: 2,
    title: 'James K',
    description: "I'm interested in this item. $50 do it?",
    image:
      'https://res.cloudinary.com/m90khan/image/upload/v1614076029/AirHouse/Users/user-1_j3zuy0.png',
  },
  {
    id: 3,
    title: 'Jessica L',
    description: "I'm interested in this item. Last price?",
    image:
      'https://res.cloudinary.com/m90khan/image/upload/v1614076034/AirHouse/Users/user-5_x2iwws.png',
  },
  {
    id: 4,
    title: 'Lauren S',
    description: 'Still available?',
    image:
      'https://res.cloudinary.com/m90khan/image/upload/v1614076036/AirHouse/Users/user-3_sjtffv.png',
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'Khan Mohsin',
              description:
                "I'm interested in this item. When will you be able to post it?",
              image: require('../assets/khan.png'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
